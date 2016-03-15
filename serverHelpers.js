 var dbMethod = require('./db/dbMethods.js');
 var Promise = require('bluebird');


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

