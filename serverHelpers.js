 var dbMethod = require('./db/dbMethods.js');
 var Promise = require('bluebird');



////// - USER FUNCTIONS - ///////



exports.signupRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
 }

exports.loginRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
 }

exports.logoutRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
 }

exports.getUserRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
	 	if (reqBody.userID && typeof reqBody.userID === 'number'){
	      dbMethod.getUserByID(reqBody.userID)
	        .then(function(response){
	        	var body = {};
	        	if (response === false){
	        		body.status = 'failed';
	        		body.message = 'could not find that user.';
	        		reject(body);
	        	} else {
	          		body.user = {};
	          		body.user.username = response[0].username;
	          		body.user.email = response[0].email
	          		body.status = 'complete'
	         		body.message = 'user retrieved.'
	          		fulfill(body);
	          	}
	        })
	    } else if (reqBody.username && typeof reqBody.username === 'string'){
	      dbMethod.getUserByUsername(reqBody.username)
	        .then(function(response){
	        	var body = {};
	        	if (response === false){
	        		body.status = 'failed';
	        		body.message = 'could not find that user.';
	        		reject(body);
	        	} else{
		          	body.user = {};
		          	body.user.id = response[0].id;
		          	body.user.username = response[0].username;
		          	body.user.email = response[0].email
		          	body.status = 'complete'
		          	body.message = 'user retrieved.'
		          	fulfill(body);
	      		}
	        })
	    } else {
	      var errorBody = {
	        status : 'failed',
	        message : 'invalid request format. Please send a valid "userID" or "username" '
	      }
	      reject(errorBody);
	    }
	})
 }

exports.deleteUserRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (reqBody.user && typeof reqBody.user.userID === 'number'){
	 		var user = reqBody.user;
	 		var userID = user.userID;
	 		dbMethod.removeUser(userID)
	 			.then(function(response){
	 				var obj = {};
	 				if (response.length !== 0){
	 					obj.status = 'complete';
	 					obj.message = 'user deleted';
	 					obj.user = user;
	 					fulfill(obj);
	 				} else {
	 					obj.status = 'failed';
	 					obj.message = 'user was not deleted - user did not exist';
	 					reject(obj);
	 				}
	 			})
	 			.catch(function(err){
	 				//do something with err
	 				console.log('error in helper: ',err)
	 				var errorBody = {
	 					status : 'failed',
	 					message : 'internal error',
	 					error : err
	 				}
	 				reject(errorBody);
	 			})
	 	} else {
	 		var errorBody = {
	 			status : 'failed',
	 			message : 'invalid input. Please provide a valid "user" object containing a "userID"',
	 			}
	 		reject(errorBody);
	 	}
 	})
}



////// - ITEM FUNCTIONS - ///////



exports.createItemRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (reqBody.item && typeof reqBody.item.name === 'string'){
	 		var item = reqBody.item;
	 		dbMethod.addItem(item)
	 			.then(function(response){
	 				if (typeof response[0] === 'number'){
	 					var newItem;
	 					dbMethod.getItemByID(response[0])
	 						.then(function(res){
	 							newItem = res[0];
	 							var body = {
	 								status : 'complete',
	 								message : 'item added.',
	 								item : newItem
	 							}
	 							fulfill(body);
	 						})
	 				} else if (response === 'We do not have a record of that items owner.') {
	 					var body = {
	 						status : 'failed',
	 						message : response
	 					}
	 					reject(body);
	 				}
	 			})
	 			.catch(function(err){
	 				var body = {
	 					status : 'failed',
	 					message : 'error. make sure you provided the correct information in the request body.',
	 					error : err
	 				}
	 				reject(body);
	 			})
	 	} else {
	 		var body = {
	 			status : 'failed',
	 			message : 'invalid request format. make sure you provided an item object with name, address, zip, category, price, photo, item_owner, date_start, and date_end fields.'
	 		}
	 		reject(body);
	 	}
 	})
}

exports.searchItemsRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (reqBody.searchTerm && typeof reqBody.searchTerm === 'string' 
 			&& reqBody.zipCode && typeof reqBody.zipCode === 'number'){

	 		var name = reqBody.searchTerm;
	 		var zip = reqBody.zipCode;
	 		dbMethod.getItemsByNameLike(name)
	 			.then(function(items){
	 				var results = items.filter(function(x){
	 					return x.zip === zip;
	 				})
	 				var body = {
	 					status : 'complete',
	 					message : 'items retrieved.',
	 					'items' : results
	 				}
	 				fulfill(body);
	 			})
	 			.catch(function(err){
	 				var body = {
	 					status : 'failed',
	 					message : 'internal error',
	 					error : err
	 				}
	 				reject(body);
	 			})
 		} else {
 			var body = {
 				status : 'failed',
 				message : 'invalid input. Make sure you supplied a valid searchTerm and zipCode.'
 			}
 			reject(body);
 		}
 	})
}

exports.getOwnedRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (reqBody.user_id && typeof reqBody.user_id === 'number'){
 		var userID = reqBody.user_id;
 		dbMethod.getItemsByOwnerID(userID)
 			.then(function(items){
 				var body = {
 					status : 'complete',
 					message : 'items retrieved.',
 					'items' : items
 				}
 				fulfill(body);
 			})
 			.catch(function(err){
 				var body = {
 					status : 'failed',
 					message : 'internal error',
 					error : err
 				}
 				reject(body);
 			})
 		} else {
		 	var body = {
				status : 'failed',
				message : 'invalid input. Make sure you supplied a valid user_id'
			}
			reject(body);
 		}
 	})
}

// consider refactoring 'isRentingRoute': instead of returning rentals w/ an 'item' 
// property, return items (no dupes) w/ a 'rentals' property (an array of rental arrays).
// More sensible, and is consistent with 'rentedFromRoute'. -Justin
exports.isRentingRoute = function(reqBody){
 //get a list of rentals, each with an item object in it.
 	return new Promise(function(fulfill, reject){

	 	if (!!!reqBody.userID || typeof reqBody.userID !== 'number'){
	 		var body = {
	 			status : 'failed',
	 			message : 'invalid format. Make sure you sent a valid userID.'
	 		}
	 		reject(body);
	 	}

 		var renterID = reqBody.userID;
 		dbMethod.getRentalsByRenterID(renterID)
 			.then(function(results){

 				if (results === false){
 					var body = {
	 					status : 'completed',
	 					message : 'No rentals found for that user.',
	 					console.log('no items found route triggered.')
	 					rentalsWithItems : []
	 				}
	 				fulfill(body);
	 				return;
 				} 

 				var rentals = results;
 				var items = [];

 				rentals.forEach(function(x){
 					items.push(new Promise(function(res, rej){
 						var itemID = x.item_id
 						dbMethod.getItemByID(itemID)
 							.then(function(resp){
 								res(resp[0]);
 							})	
 							.catch(function(err){
 								rej(err);
 							})
 					}))
 				})

 				Promise.all(items)
 					.then(function(){
 						//pack item objects inside the appropriate rental objects
 						for (var i=0; i<rentals.length; i++){
 							for (var j=0; j<items.length; j++){
 								if (rentals[i].item_id === items[j]._settledValue.id){
 									rentals[i].item = items[j]._settledValue;
 								}
 							}
 						}

 						var body = {
 							status : 'complete',
 							message : 'rentals retrieved (with objects inside)',
 							rentalsWithItems : rentals
 						}
 						fulfill(body)
 					})

 					.catch(function(err){
 						var body = {
 							status : 'failed',
 							message : 'could not retrieve items a user is renting',
 							error : err
 						}
 						reject(body);
 					})
 			})
 	})
}

exports.rentedFromRoute = function(reqBody){
//get a list of items, each with an array of rentals in it.
 	return new Promise(function(fulfill, reject){

	 	if (!!!reqBody.owner || typeof reqBody.owner !== 'number'){
	 		var body = {
	 			status : 'failed',
	 			message : 'invalid format. Make sure you sent a valid "owner".'
	 		}
	 		reject(body);
	 	}

 		var ownerID = reqBody.owner
 		dbMethod.getItemsByOwnerID(ownerID)
 			.then(function(results){
 				var items = results;
 				var rentalArrays = [];

 				items.forEach(function(x){
 					rentalArrays.push(new Promise(function(res, rej){
 						var itemID = x.id
 						dbMethod.getRentalsByItemID(itemID)
 							.then(function(resp){
 								res(resp);
 							})	
 							.catch(function(err){
 								rej(err);
 							})
 					}))
 				})

 				Promise.all(rentalArrays)
 					.then(function(){
 						//pack rentals arrays inside the appropriate item objects
 						for (var i=0; i<items.length; i++){
 							for (var j=0; j<rentalArrays.length; j++){
 								if (!!rentalArrays[j]._settledValue && items[i].id === rentalArrays[j]._settledValue[0].item_id){
 									items[i].rentals = rentalArrays[j]._settledValue;
 								} else {
 									items[i].rentals = items[i].rentals || [];
 								}
 							}
 						}
 						var body = {
 							status : 'complete',
 							message : 'items retrieved (with arrays of rentals inside)',
 							itemsWithRentals : items
 						}
 						fulfill(body)
 					})

 					.catch(function(err){
 						var body = {
 							status : 'failed',
 							message : 'could not retrieve items being rented by others',
 							error : err
 						}
 						reject(body);
 					})
 			})
 	})
}

exports.deleteItemRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (reqBody.item_id && typeof reqBody.item_id === 'number'){
		var itemID = reqBody.item_id;
 		var userID = reqBody.user_id;
 		var pw = reqBody.password;

 		// TODO: when AUTH in place, use username and password to authenticate
 		// prior to deleting an item.

 		dbMethod.removeItem(itemID)
 			.then(function(response){
 				var obj = {};
 				if (response.length !== 0){
 					obj.status = 'complete';
 					obj.message = 'item deleted.';
 					obj.itemID = response[0].id;
 					obj.itemName = response[0].name;
 					fulfill(obj);
 				} else {
 					obj.status = 'failed';
 					obj.message = 'item was not deleted - item did not exist';
 					reject(obj);
 				}
 			})
 			.catch(function(err){
 				//do something with err
 				console.log('error in helper: ',err)
 				var errorBody = {
 					status : 'failed',
 					message : 'internal error',
 					error : err
 				}
 				reject(errorBody);
 			})
 		} else {
 			var errorBody = {
 					status : 'failed',
 					message : 'invalid format. Make sure you provided a valid item_id, user_id, and password.',
 				}
 			reject(errorBody);
 		}
 	})
}



////// - RENTAL FUNCTIONS - ///////

exports.createRentalRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){

		if (!!!reqBody.rental || typeof reqBody.rental.user_id !== 'number'
			|| typeof reqBody.rental.item_id !== 'number' || 
			typeof reqBody.rental.date_start !== 'string' || 
			typeof reqBody.rental.date_end !== 'string') {

			var body = {
				status : 'failed',
				message : 'invalid request format. Make sure you provided a rental object with valid item_id, date_start, and date_end fields.'
			}
			reject(body)
		}

		if (Date.parse(reqBody.rental.date_start) >= Date.parse(reqBody.rental.date_end)){
			var body = {
				status : 'failed',
				message : 'invalid dates. Make sure date_start does not occur after date_end, or visa versa.'
			}
			reject(body)
		}

 		var rental = reqBody.rental;
 		var itemID = rental.item_id;
 		var start = rental.date_start;
 		var end = rental.date_end;

 		var hasBookingConflict = false;
 		var dateIsInRange = true;

 		dbMethod.dateHasBookConflicts(itemID, start, end)
 			.then(function(bool){
 				hasBookingConflict = bool;
 				dbMethod.dateIsInRange(itemID, start, end)
 					.then(function(bool){
 						dateIsInRange = bool;
 						if (!hasBookingConflict && dateIsInRange){

 							//add the rental!
					 		dbMethod.addRental(rental)
					 			.then(function(response){
					 				if (typeof response[0] === 'number'){
					 					var newRental;
					 					dbMethod.getRentalByRentalID(response[0])
					 						.then(function(res){
					 							newRental = res[0];
					 							var body = {
					 								status : 'complete',
					 								message : 'rental created.',
					 								rental : newRental
					 							}
					 							fulfill(body);
					 						})
					 				} else if (response === false) {
					 					var body = {
					 						status : 'failed',
					 						message : 'error retrieving rental'
					 					}
					 					reject(body);
					 				}
					 			})
					 			.catch(function(err){
					 				var body = {
					 					status : 'failed',
					 					message : 'internal error',
					 					error : err
					 				}
					 				reject(body)
					 			})

 						} else if (!dateIsInRange) {
 							//reject for item conflict
 							var body = {
			 					status : 'failed',
			 					message : 'rental conflicts with an existing booking.'
			 				}
			 				reject(body)
 						} else if (hasBookingConflict){
 							//reject for booking conflict
 							var body = {
			 					status : 'failed',
			 					message : 'booking conflict detected.'
			 				}
			 				reject(body)
 						}
 					})
 					.catch(function(err){
		 				var body = {
					 		status : 'failed',
					 		message : 'Error checking date range validity. Were date_start and date_end in the correct dateTime format?'
					 	}
					 	reject(body)
 					})
 			})
 			.catch(function(err){
 				var body = {
			 		status : 'failed',
			 		message : 'Error checking date conflicts. Were date_start and date_end in the correct dateTime format?'
			 	}
			 	reject(body)
 			})
 	})
}

exports.rentalsForItemRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (!!!reqBody.itemID || typeof reqBody.itemID !== 'number'){
			var body = {
		 		status : 'failed',
		 		message : 'invalid format. Make sure you provided a valid itemID.'
		 	}
		 	reject(body)
 		}

 		var itemID = reqBody.itemID;
 		dbMethod.getRentalsByItemID(itemID)
 			.then(function(rentals){
 				var body = {
 					status : 'complete',
 					message : 'rentals retrieved.',
 					'rentals' : rentals
 				}
 				fulfill(body);
 			})
 			.catch(function(err){
 				var body = {
 					status : 'failed',
 					message : 'internal error',
 					error : err
 				}
 				reject(body);
 			})
 	})
}

exports.deleteRentalRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		if (!!!reqBody.rentalID || typeof reqBody.rentalID !== 'number'){
		 	var body = {
				status : 'failed',
				message : 'invalid format. Make sure you entered a valid rentalID, userID, and password'
			}
			reject(body);
 		}

		var rentalID = reqBody.rentalID;
 		var userID = reqBody.userID;
 		var pw = reqBody.password;

 		// TODO: when AUTH in place, use username and password to authenticate
 		// prior to deleting a rental.

 		dbMethod.removeRental(rentalID)
 			.then(function(response){
 				var obj = {};
 				if (response.length !== 0){
 					obj.status = 'complete';
 					obj.message = 'rental deleted.';
 					obj.rentalID = response[0].id;
 					fulfill(obj);
 				} else {
 					obj.status = 'failed';
 					obj.message = 'item was not deleted - item did not exist';
 					reject(obj);
 				}
 			})
 			.catch(function(err){
 				//do something with err
 				var errorBody = {
 					status : 'failed',
 					message : 'internal error',
 					error: err
 				}
 				reject(errorBody);
 			})
 	})
}
