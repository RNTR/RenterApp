 var dbMethod = require('./db/dbMethods.js');
 var Promise = require('bluebird');



////// - USER FUNCTIONS - ///////



exports.signupRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
 }

exports.loginRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
 }

exports.logoutRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
 }

exports.getUserRoute = function(req){
 	return new Promise(function(fulfill, reject){
	 	if (req.body.userID){
	      dbMethod.getUserByID(req.body.userID)
	        .then(function(response){
	          body = {};
	          body.user = {};
	          body.user.username = response[0].username;
	          body.user.email = response[0].email
	          body.status = 'complete'
	          body.message = 'user retrieved.'
	          fulfill(body);
	        })
	    } else if (req.body.username){
	      dbMethod.getUserByID(req.body.username)
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

exports.deleteUserRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}



////// - ITEM FUNCTIONS - ///////



exports.createItemRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.searchItemsRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.getOwnedRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.isRentingRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.rentedFromRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.deleteItemRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}



////// - RENTAL FUNCTIONS - ///////



exports.createRentalRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.rentalsForItemRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}

exports.deleteRentalRoute = function(req){
 	return new Promise(function(fulfill, reject){
 		fulfill('test')
 	})
}
