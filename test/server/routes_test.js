require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var dbMethod = require('../../db/dbMethods.js');
var Promise = require('bluebird');


//Truncate empties the database tables. It is called once before each test and again after all have run.
function truncate () {
  var tables = ['users', 'items', 'rentals'];
  return Promise.each(tables, function (table) {
    return knex.raw('truncate table ' + table + ' cascade');
  });
};

describe ("Server-Side Routing:", function() {

  beforeEach(function(done) {
    truncate()
    .then(function(resp){
      done()
    })
  })

  after(function(done) {
    truncate()
    .then(function(resp){
      knex.destroy();
      done();
    })
  })


  describe("Test test", function() {
    it_ ("Should pass a basic test: 1+1=2", function * (){
      expect(1+1).to.equal(2);
    })
  })



})