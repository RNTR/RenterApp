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

exports.getUserByUsername = function(username){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('users').where('username', username)
			.then(function(user){
				knex.destroy();
				if (user.length === 0){
					fulfill(false);
				} else if (user[0].username === username){
					fulfill(user);
				} else {
					reject(user);
				}
			})
			.catch(function(err){
				knex.destroy();
				console.error('error getting user by username: ', err);
				reject(err);
			})
	})
}

exports.getUserByID = function(ID){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('users').where('id', ID)
			.then(function(user){
				knex.destroy();
				if (user.length === 0){
					fulfill(false);
				} else if (user[0].id === ID){
					fulfill(user);
				} else {
					reject(user);
				}
			})
			.catch(function(err){
				knex.destroy();
				console.error('error getting user by ID: ', err);
				reject(err);
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

exports.removeItem = function(id){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.del('*').from('items').where('id', id)
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

//TODO: search by first three chars of zipcode rather than whole thing - return all that start with the first 3 numbers.
		// - Will hopefully increase # of search results.
exports.getItemsByZip = function(zip){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('items').where('zip', zip)
			.then(function(items){
				knex.destroy();
				fulfill(items)
			})
			.catch(function(err){
				knex.destroy();
				console.error('error getting items by zipcode: ', err);
				fulfill(err)
			})
	})
}

exports.getItemsByName = function(name){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('items').where('name', name)
			.then(function(items){
				knex.destroy();
				fulfill(items)
			})
			.catch(function(err){
				knex.destroy();
				console.error('error getting items by zipcode: ', err);
				fulfill(err)
			})
	})
}

exports.getItemByID = function(ID){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}

exports.dateHasBookConflicts = function(itemId, start, end){
	// TODO: return an array of conflicts instead of bool - tell users WHEN
	// conflicts occur, not just that they exist.
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('rentals').where('item_id',itemId).whereBetween('date_start', [start, end]).orWhereBetween('date_end', [start, end])
			.then(function(items){
				knex.destroy();
				if (items.length === 0){
					fulfill(false);
				} else {
					fulfill(true);
				}
			})
			.catch(function(err){
				knex.destroy();
				console.error('error checking booking conflicts: ', err);
				reject(err)
			})
	})
}

exports.dateIsInRange = function(itemId, start, end){
	return new Promise(function(fulfill, reject){
		var knex = require('knex')(config[env]); 
		knex.select('*').from('items').where('id',itemId).whereNotBetween('date_start', [start, end]).whereNotBetween('date_end', [start, end])
			.then(function(items){
				knex.destroy();
				if (items.length === 0){
					fulfill(false);
				} else {
					fulfill(true);
				}
			})
			.catch(function(err){
				knex.destroy();
				console.error('error checking booking conflicts: ', err);
				reject(err);
			})
	})
	//TODO: should not allow owners to book their own items.
}

exports.bookItem = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
	//TODO: should not allow owners to book their own items.
}

exports.unbookItem = function(){
	return new Promise(function(fulfill, reject){
		fulfill('test')
	})
}


