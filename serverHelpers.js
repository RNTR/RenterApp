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
 		fulfill('test')
 	})
}

exports.searchItemsRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.getOwnedRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.isRentingRoute = function(reqBody){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
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
