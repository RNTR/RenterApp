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
	 	if (reqBody.userID){
	      dbMethod.getUserByID(reqBody.userID)
	        .then(function(response){
	          body = {};
	          body.user = {};
	          body.user.username = response[0].username;
	          body.user.email = response[0].email
	          body.status = 'complete'
	          body.message = 'user retrieved.'
	          fulfill(body);
	        })
	    } else if (reqBody.username){
	      dbMethod.getUserByID(reqBody.username)
	        .then(function(response){
	          body = {};
	          body.user = {};
	          body.user.username = response[0].username;
	          body.user.email = response[0].email
	          body.status = 'complete'
	          body.message = 'user retrieved.'
	          fulfill(body);
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
 					message : 'internal error'
 				}
 				reject(err);
 			})
 	})
}



////// - ITEM FUNCTIONS - ///////



exports.createItemRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
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
 					message : 'internal error',
 					error : err
 				}
 				reject(body)
 			})
 	})
}

exports.searchItemsRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		var name = reqBody.searchTerm;
 		var zip = reqBody.zipCode;
 		dbMethod.getItemsByName(name)
 			.then(function(items){
 				var results = items.filter(function(x){
 					return x.zip.toString() === zip;
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
 	})
}

exports.getOwnedRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
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
 	})
}

exports.isRentingRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		//get a list of rentals, each with an item
 		//object in it.
 		var renterID = reqBody.userID;
 		dbMethod.getRentalsByRenterID(renterID)
 			.then(function(results){
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
 								console.error('error grabbing item in async : ', err)
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
 			})
 	})
}

exports.rentedFromRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.deleteItemRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}



////// - RENTAL FUNCTIONS - ///////



exports.createRentalRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.rentalsForItemRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.deleteRentalRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}
