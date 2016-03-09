//db setup stuff goes here.
var config = require('../knexfile.js');  
var env = process.env.NODE_ENV || 'development'; 
var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 


// try migrating from the command line