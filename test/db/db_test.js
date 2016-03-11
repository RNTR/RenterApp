require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var knexCleaner = require('knex-cleaner');
var dbMethod = require('../../db/dbMethods.js');

describe ("The Database", function() {
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

    it_ ('Should NOT add a new user if username is already taken', function * (){
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
          console.log('this is the addUser response in userExists test: ', userInfo)
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
    it_ ('Should add a new item to the items table', function * (){
      var user = yield dbMethod.addUser('Bananna Lumpkins', 'ILikeCheese', 'theemail@emailery.eee')
        .then(function(userID){
          return userID[0];
        })

      var start = new Date(2016, 2, 17, 3, 00, 0); // March 17th, 2016 at 3AM
      var end = new Date(2016, 2, 17, 5, 00, 0); // March 17th, 2016 at 5AM
      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': user,
        'date_start': start,
        'date_end': end
      }

      // yield dbMethod.addItem('Lawn Mower', '123 east Murphy Lane', '10507', 'Lawn and Garden', '10', 'null', user, start, end)
      yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          expect(itemID[0]).to.be.a('number'); //use itemExists instead
        })
    })

    it_ ('Should NOT add an item if the owner is not a valid user', function * (){
      
      var start = new Date(2016, 2, 17, 3, 00, 0); // March 17th, 2016 at 3AM
      var end = new Date(2016, 2, 17, 5, 00, 0); // March 17th, 2016 at 5AM
      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': 12345,
        'date_start': start,
        'date_end': end
      }

        yield dbMethod.addItem(itemObj)
          .then(function(resp){
            expect(resp).to.equal('We do not have a record of that items owner.')
          })
    })
  })

  describe("dbMethods.itemExists", function() {
    it_ ('Should return true if an item exists', function * (){

      var user = yield dbMethod.addUser('UserMang', 'ILikeCheese', 'theemail@emailery.eee')
        .then(function(userID){
          return userID[0];
        })

      var start = new Date(2016, 2, 17, 3, 00, 0); // March 17th, 2016 at 3AM
      var end = new Date(2016, 2, 17, 5, 00, 0); // March 17th, 2016 at 5AM
      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': user,
        'date_start': start,
        'date_end': end
      }

      var item = yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          return itemID[0];          
        })

      yield dbMethod.itemExists(item)
        .then(function(bool){
          expect(bool).to.equal(true);
        })
    })

    it_ ('Should return false for nonexistent items', function * (){
      yield dbMethod.itemExists(1234567)
        .then(function(bool){
          expect(bool).to.equal(false);
        })
    })    
  })

  describe("dbMethods.removeItem", function() {
    xit_ ('Should delete an item from the items table', function * (){

    })
  })

  describe("dbMethods.getItemsByZip", function() {
    xit_ ('should return all items in a certain ZIP code', function * (){

    })
  })

  describe("dbMethods.getItemsByNameAndZip", function() {
    xit_ ('should return all items with a certain name in a certain ZIP code', function * (){
      //is there a 'like' sql parameter to get close matches?
    })
    xit_ ('should NOT return items with the wrong ZIP code', function * (){

    })
  })

  describe("dbMethods.getItemsByName", function() {
    xit_ ('Should return all items with a certain name', function * (){
      //is there a 'like' sql parameter to get close matches?
    })
  })

  describe("dbMethods.bookItem", function() {
    xit_ ('Should add a new rental to the rentals table if there is no date conflict', function * (){

    })

    xit_ ("Should update a booked item's isConfirmed status to 'true'" , function * (){

    })

    xit_ ('Should NOT add a new rental if the item is already booked', function * (){

    })
  })


  describe("dbMethods.unbookItem", function() {
    xit_ ('Should delete an item from the rentals table', function * (){

    })

    xit_ ("Should update a booked item's isConfirmed status to 'false'", function * (){

    })
  })
})
