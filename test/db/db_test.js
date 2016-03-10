require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var knexCleaner = require('knex-cleaner');
var dbMethod = require('../../db/dbMethods.js');

describe("The Database", function() {
  // beforeEach(function(done) {
  //   //TODO: truncate, or dropdb + createdb
  //   knexCleaner.clean(knex)
  //     .then(function(){
  //       done();
  //     })
  // })

  describe("dbMethods.addUser", function() {
    it_ ('Should add a new user to the users table', function * (){
      yield dbMethod.addUser('jeffrey', '1234', 'jeffrey@netscape.net')
        .then(function(resp){
          expect(resp[0]).to.be.a('number')
        })
    })

    it_ ('Should not add a new user if username is already taken', function * (){
      yield dbMethod.addUser('Marge', 'password', 'margeemail@marge.com')

      yield dbMethod.addUser('Marge', 'pw', 'another@email.com')
        .then(function(resp){
          expect(resp).to.equal('Username already taken. Choose another.')
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

    xit ('Should NOT add an item if the owner is not a valid user', function(){

    })
  })


  describe("dbMethods.removeItem", function() {
    xit ('Should delete an item from the items table', function(){

    })
  })

  describe("dbMethods.getItemsByZip", function() {
    xit ('should return all items in a certain ZIP code', function(){

    })
  })

  describe("dbMethods.getItemsByNameAndZip", function() {
    xit ('should return all items with a certain name in a certain ZIP code', function(){
      //is there a 'like' sql parameter to get close matches?
    })
    xit ('should NOT return items with the wrong ZIP code', function(){

    })
  })

  describe("dbMethods.getItemsByName", function() {
    xit ('Should return all items with a certain name', function(){
      //is there a 'like' sql parameter to get close matches?
    })
  })

  describe("dbMethods.bookItem", function() {
    xit ('Should add a new rental to the rentals table if there is no date conflict', function(){

    })

    xit ("Should update a booked item's isConfirmed status to 'true'" , function(){

    })

    xit ('Should NOT add a new rental if the item is already booked', function(){

    })
  })


  describe("dbMethods.unbookItem", function() {
    xit ('Should delete an item from the rentals table', function(){

    })

    xit ("Should update a booked item's isConfirmed status to 'false'", function(){

    })
  })
})
