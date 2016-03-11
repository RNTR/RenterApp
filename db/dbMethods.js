var db = require('./dbConfig.js');
var config = require('../knexfile.js');
var env =  process.env.NODE_ENV || 'development';  
var Promise = require('bluebird');


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
				if (err.constraint === 'users_username_unique'){
					fulfill('Username already taken. Choose another.')
				}
				reject(err)
			})
	})
}


exports.removeUser = function(id){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.del('*').from('users').where('id', id)
			.then(function(response){
				knex.destroy();
				fulfill(response)
			})
			.catch(function(err){
				knex.destroy();
				reject(err);
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
				} else if (!!response[0].username){
					fulfill(true);
				} else {reject({'message': 'error checking if user exists', 'body': response})
				}
			})
		.catch(function(err){
			console.error('error checking if user exists', err)
			knex.destroy();
			reject(err);
		})

	})

}

exports.addItem = function(obj){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.insert(obj).returning('id').into('items')
			.then(function(response){
				knex.destroy();
				fulfill(response);
			})
			.catch(function(err){
				knex.destroy()
				if(err.constraint === 'items_item_owner_foreign'){
					fulfill('We do not have a record of that items owner.')
				}
				reject(err)
			})
	})
}

exports.itemExists = function(id){
	return new Promise(function(fulfill, reject){
	var knex = require('knex')(config[env]);

	knex.select('*').from('items').where('id', id)
		.then(function(response){
			knex.destroy();
			if (response.length === 0){
				fulfill(false);
			} else if (!!response[0].name){
				fulfill(true);
			} else {reject({'message': 'error checking if item exists', 'body': response})
			}
		})
		.catch(function(err){
			console.error('error checking if item exists', err)
			knex.destroy();
			reject(err);
		})


	})
}

exports.removeItem = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}

exports.getItemsByZip = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}

exports.getItemsByNameAndZip = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}

exports.getItemsByName = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}

exports.bookItem = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}

exports.unbookItem = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}


