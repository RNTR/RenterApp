//write anything that accesses, adds to, or updates the database here.
var db = require('./dbConfig.js');
var config = require('../knexfile.js');  //or wherever knexfile ultimately is
var env =  process.env.NODE_ENV || 'development';  
var knex = require('knex')(config[env]); 
var Promise = require('bluebird');


// create the addUser method with promises  BLUEBIRD

exports.addUser = function(username, password, email){
	return new Promise(function(fulfill, reject){
		knex.insert({'username': username, 'password': password, 'email': email}).returning('id').into('users')
			.then(function(response){
				fulfill(response)
			})
			.catch(function(err){
				reject(err)
			})
	})
}


