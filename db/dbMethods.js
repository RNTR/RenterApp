//write anything that accesses, adds to, or updates the database here.
var db = require('./dbConfig.js');
var config = require('../knexfile.js');  //or wherever knexfile ultimately is
var env =  process.env.NODE_ENV || 'development';  
// var knex = require('knex')(config[env]); 
var Promise = require('bluebird');


// create the addUser method with promises  BLUEBIRD

exports.addUser = function(username, password, email){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.insert({'username': username, 'password': password, 'email': email}).returning('id').into('users')
			.then(function(response){
				knex.destroy();
				fulfill(response)
			})
			.catch(function(err){
				knex.destroy();
				reject(err)
			})
	})
}


exports.userExists = function(id){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('users').where('id', id)
			.then(function(response){
				knex.destroy();
				if (response.length === 0){
					fulfill(false);
				} else {
					fulfill(true);
				} 
		})
		.catch(function(err){
			console.error('ERROR', err)
			knex.destroy();
			reject(err);
		})

	})

}


