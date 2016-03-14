require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var routes = require('../../server.js');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var Promise = require('bluebird');


//Truncate empties the database tables. It is called once before each test and again after all have run.
function truncate () {
  var tables = ['users', 'items', 'rentals'];
  return Promise.each(tables, function (table) {
    return knex.raw('truncate table ' + table + ' cascade');
  });
};

describe ("Server-Side Routing:", function() {

  var app = TestHelper.createApp() //TestHelper is a global object declared in test-helper.js
  app.use('/', routes)
  app.testReady()

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


  describe("The server", function() {
    it_ ("should serve an example endpoint", function * (){
      yield request(app)
        .get('/test/example_endpoint')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('Hi there, your GET request has fulfilled!')
        })
    })

    it_ ("should serve an html page on '/'", function * (){
      yield request(app)
        .get('/')
        .expect(200)
        .expect(function(response) {
          expect(response.text).to.include('!DOCTYPE html>' || '!DOCTYPE html>\n')
        })
    })

  })

})