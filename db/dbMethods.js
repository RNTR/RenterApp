//write anything that accesses, adds to, or updates the database here.
var db = require('./dbConfig.js');
var config = require('../knexfile.js');  //or wherever knexfile ultimately is
var env =  process.env.NODE_ENV || 'development';  
var knex = require('knex')(config[env]); 