//db setup stuff goes here.
var config = require('../knexfile.js');  
var env = process.env.NODE_ENV || 'development'; 
// var env = 'test';
var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config])
	.then(function(x){
		console.log('migration complete, killing the connection.')
		knex.destroy();
	})
	.catch(function(err){
		console.error('migration error', err);
		knex.destroy();
	})


// try migrating from the command line