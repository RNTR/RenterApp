require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var env = process.env.NODE_ENV;
var db = require('../../db/dbConfig.js');
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var dbMethod = require('../../db/dbMethods.js');

describe("The Database", function() {

  // TODO: do some setup stuff - create tables, populate db with test data, etc.
  // use beforeEach here and truncate the tables.  this will drop the database every time a new it_ is called

  // TRUNCATE 

  it ("Should pass a basic test: 1 === 1" , function() {

    //placeholder test:
    expect(1).to.equal(1);

    })
  describe("dbMethods.addUser", function() {
    it_ ('Should add a new user to the users table', function * (){
      yield dbMethod.addUser('jeffrey', '1234', 'jeffrey@netscape.net')
        .then(function(something){
          expect(something[0]).to.be.a('number')
        })
    })
  })

  describe("dbMethods.userExists", function() {
    it_ ('Should return true if a user exists', function * (){
      var id = yield dbMethod.addUser('larry', 'larryPassword', 'larry.larry@larry.larry')
        .then(function(userInfo){
          return userInfo[0]})

      yield dbMethod.userExists(id)
        .then(function(bool){
          expect(bool).to.equal(true)
        })
    })

    it_ ('Should return false for a nonexistent user', function * () {
      yield dbMethod.userExists(42786)
        .then(function(bool) {
          expect(bool).to.equal(false);
        })
    })
  })

  describe("dbMethods.removeUser", function() {
    it_ ('Should delete a user from the users table', function * (){
      var user = yield dbMethod.addUser('Billiam Uttsbuuts', '7', 'b.uttsbuuts@larry.larry')
      .then(function(userID){
        return userID[0]; })

      yield dbMethod.removeUser(user)

      yield dbMethod.userExists(user)
        .then(function(bool){
          expect(bool).to.equal(false)
        })
    })
  })

  describe("dbMethods.addItem", function() {
    xit ('Should add a new item to the items table', function(){

    })
  })

  describe("dbMethods.removeItem", function() {
    xit ('Should delete an item from the items table', function(){

    })
  })

  describe("dbMethods.createRental", function() {
    xit ('Should add item to the rentals table', function(){

    })
  })

  describe("dbMethods.deleteRental", function() {
    xit ('Should delete an item to the rentals table', function(){

    })
  })
})
