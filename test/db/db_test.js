require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var dbMethod = require('../../db/dbMethods.js');
var Promise = require('bluebird');


//Truncate empties the database tables. We call it once before each test.
function truncate () {
  var tables = ['users', 'items', 'rentals'];
  return Promise.each(tables, function (table) {
    return knex.raw('truncate table ' + table + ' cascade');
  });
};

describe ("Database Query Functions:", function() {

  beforeEach(function(done) {
    truncate()
    .then(function(resp){
      done()
    })
  })


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

  describe("dbMethods.getUserByUsername", function() {
    it_ ("Should return a single user's information", function * (){

      yield dbMethod.addUser('larry', 'larryPassword', 'larry.larry@larry.larry')

      yield dbMethod.getUserByUsername('larry')
        .then(function(user){
          expect(user[0].username).to.equal('larry')
        })
    })

    it_ ("Should return false if an unclaimed username is queried", function * (){

      yield dbMethod.addUser('larry', 'larryPassword', 'larry.larry@larry.larry')

      yield dbMethod.getUserByUsername('Michaelangelo')
        .then(function(bool){
          expect(bool).to.equal(false)
        })
    })
  })

  describe("dbMethods.getUserByID", function() {
    it_ ("Should return a single user's information", function * (){

      var userID = yield dbMethod.addUser('larry', 'larryPassword', 'larry.larry@larry.larry')
        .then(function(resp){
          return resp[0];
        })

      yield dbMethod.getUserByID(userID)
        .then(function(user){
          expect(user[0].username).to.equal('larry')
        })

    })

    it_ ("Should return false if an unassigned ID is queried", function * (){

      var id = yield dbMethod.addUser('larry', 'larryPassword', 'larry.larry@larry.larry')
        .then(function(userID){
          return userID[0];
        })

      yield dbMethod.getUserByID(123456)
        .then(function(bool){
          expect(bool).to.equal(false)
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
    it_ ('Should delete an item from the items table', function * (){

      var user = yield dbMethod.addUser('UserMon', 'pass', 'theemail@emailery.eee')
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

      yield dbMethod.removeItem(item)

      yield dbMethod.itemExists(item)
        .then(function(bool){
          expect(bool).to.equal(false);
        })
    })
  })

  describe("dbMethods.getItemsByZip", function() {
    it_ ('should return all items in a certain ZIP code', function * (){


      var user = yield dbMethod.addUser('Hallilucious t. Abercrombe, Jr., Esquire', 'BUCKETSAUCE', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var start = new Date(2016, 2, 17, 3, 00, 0); // March 17th, 2016 at 3AM
      var end = new Date(2016, 2, 17, 5, 00, 0); // March 17th, 2016 at 5AM

      var itemOne = {
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

      var itemTwo = {
        'name': 'Backoe',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': user,
        'date_start': start,
        'date_end': end
      }

      var itemThree = {
        'name': 'Bee costume',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': user,
        'date_start': start,
        'date_end': end
      }

      yield dbMethod.addItem(itemOne);
      yield dbMethod.addItem(itemTwo);
      yield dbMethod.addItem(itemThree);

      yield dbMethod.getItemsByZip(10507)
        .then(function(resp){
          var names = [];
          resp.forEach(function(x){
            names.push(x.name)
          })

          expect(names).to.contain('Lawn Mower');
          expect(names).to.contain('Backoe');
          expect(names).to.contain('Bee costume');
        })
    })
  })

  describe("dbMethods.getItemsByName", function() {
    it_ ('Should return all items with a certain name', function * (){
      //is there a 'like' sql parameter to get close matches?

      var user = yield dbMethod.addUser('Hallilucious t. Abercrombe, Jr., Esquire', 'BUCKETSAUCE', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var start = new Date(2016, 2, 17, 3, 00, 0); // March 17th, 2016 at 3AM
      var end = new Date(2016, 2, 17, 5, 00, 0); // March 17th, 2016 at 5AM

      var itemOne = {
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

      var itemTwo = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '78704',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': user,
        'date_start': start,
        'date_end': end
      }

      var itemThree = {
        'name': 'Bee costume',
        'address': '123 East Murphy Lane',
        'zip': '12345',
        'category': 'Holiday',
        'price': '10',
        'photo': 'null',
        'item_owner': user,
        'date_start': start,
        'date_end': end
      }

      yield dbMethod.addItem(itemOne);
      yield dbMethod.addItem(itemTwo);
      yield dbMethod.addItem(itemThree);

      yield dbMethod.getItemsByName('Lawn Mower')
        .then(function(resp){
          var zips = [];
          resp.forEach(function(x){
            zips.push(x.zip)
          })

          expect(zips).to.contain(10507);
          expect(zips).to.contain(78704);
        })
    })
  })


  describe("dbMethods.getItemByID", function() {
    it_ ("Should return a single item's information", function * (){

      var user = yield dbMethod.addUser('Hallilucious t. Abercrombe, Jr., Esquire', 'BUCKETSAUCE', 'test@test.com')
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

      var itemID = yield dbMethod.addItem(itemObj)
        .then(function(ID){
          return ID[0];
        })

      yield dbMethod.getItemByID(itemID)
        .then(function(item){
            expect(item[0].name).to.equal('Lawn Mower')
          })
    })

    it_ ("Should return false if an unassigned ID is queried", function * (){

      var user = yield dbMethod.addUser('Hallilucious t. Abercrombe, Jr., Esquire', 'BUCKETSAUCE', 'test@test.com')
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

      var itemID = yield dbMethod.addItem(itemObj)
        .then(function(ID){
          return ID[0];
        })

      yield dbMethod.getItemByID(12345)
        .then(function(bool){
            expect(bool).to.equal(false)
          })
    })
  })


  describe("dbMethods.dateHasBookConflicts", function() {
    it_ ('Should return true if there is a booking conflict for the date range', function * (){

      var owner = yield dbMethod.addUser('Owner', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var renter = yield dbMethod.addUser('Renter', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var itemStart = new Date(2016, 2, 17, 0, 00, 0); // March 17th, 2016 at 12AM
      var itemEnd = new Date(2016, 5, 1, 0, 00, 0); // June 1st, 2016 at 12AM
      var rentalStart = new Date(2016, 2, 21, 0, 00, 0); //March 21st, 2016 at 12AM
      var rentalEnd = new Date(2016, 4, 1, 0, 00, 0); //May 1st, 2016 at 12AM

      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': owner,
        'date_start': itemStart,
        'date_end': itemEnd
      }

      var item = yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          return itemID[0];
        })

      var rental = {
        'user_id' : renter,
        'item_id' : item,
        'date_start' : rentalStart,
        'date_end' : rentalEnd,
        'is_confirmed' : 'true'
      }

      // manually insert a booking:
      var db = require('knex')(config[env]); 
      // db created here so that connection can be destroyed 
      // without disrupting var 'knex' defined above

      yield db.insert(rental).into('rentals')
        .then(function(resp){
          db.destroy();
        })

      var newRentStart = new Date(2016, 2, 19, 0, 00, 0);
      var newRentEnd = new Date(2016, 2, 23, 0, 00, 0);

      yield dbMethod.dateHasBookConflicts(item, newRentStart, newRentEnd)
        .then(function(bool){
          expect(bool).to.equal(true);
        })

      })

    it_ ('Should return false if date range has no booking conflicts', function * (){

      var owner = yield dbMethod.addUser('Owner', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var renter = yield dbMethod.addUser('Renter', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var itemStart = new Date(2016, 2, 17, 0, 00, 0); // March 17th, 2016 at 12AM
      var itemEnd = new Date(2016, 5, 1, 0, 00, 0); // June 1st, 2016 at 12AM
      var rentalStart = new Date(2016, 2, 21, 0, 00, 0); //March 21st, 2016 at 12AM
      var rentalEnd = new Date(2016, 4, 1, 0, 00, 0); //May 1st, 2016 at 12AM

      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': owner,
        'date_start': itemStart,
        'date_end': itemEnd
      }

      var item = yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          return itemID[0];
        })

      var rental = {
        'user_id' : renter,
        'item_id' : item,
        'date_start' : rentalStart,
        'date_end' : rentalEnd,
        'is_confirmed' : 'true'
      }

      // manually insert a booking:
      var db = require('knex')(config[env]); 
      // db created here so that connection can be destroyed 
      // without disrupting var 'knex' defined above

      yield db.insert(rental).into('rentals')
        .then(function(resp){
          db.destroy();
        })

      var newRentStart = new Date(2016, 2, 19, 0, 00, 0);
      var newRentEnd = new Date(2016, 2, 20, 0, 00, 0);

      yield dbMethod.dateHasBookConflicts(item, newRentStart, newRentEnd)
        .then(function(bool){
          expect(bool).to.equal(false);
        })
    })

    it_ ('Should NOT detect booking conflicts for other objects', function * (){

      var owner = yield dbMethod.addUser('Owner', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var renter = yield dbMethod.addUser('Renter', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var itemStart = new Date(2016, 2, 17, 0, 00, 0); // March 18th, 2016 at 12AM
      var itemEnd = new Date(2016, 5, 1, 0, 00, 0); // June 2nd, 2016 at 12AM
      var rentalStart = new Date(2016, 2, 21, 0, 00, 0); // March 22nd, 2016 at 12AM
      var rentalEnd = new Date(2016, 4, 1, 0, 00, 0); // May 2nd, 2016 at 12AM
      var diffRentStart = new Date(2016, 2, 19, 0, 00, 0); // March 20th, 2016 at 12AM 
      var diffRentEnd = new Date(2016, 4, 21, 0, 00, 0); // May 22, 2016 at 12AM

      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': owner,
        'date_start': itemStart,
        'date_end': itemEnd
      }

      var differentItemObj = {
        'name': 'Cotton Candy Machine',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': owner,
        'date_start': itemStart,
        'date_end': itemEnd
      }

      var item = yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          return itemID[0];
        })

      var differentItem = yield dbMethod.addItem(differentItemObj)
        .then(function(itemID){
          return itemID[0];
        })

      var rental = {
        'user_id' : renter,
        'item_id' : item,
        'date_start' : rentalStart,
        'date_end' : rentalEnd,
        'is_confirmed' : 'true'
      }

      var differentRental = {
        'user_id' : renter,
        'item_id' : differentItem,
        'date_start' : diffRentStart,
        'date_end' : diffRentEnd,
        'is_confirmed' : 'true'
      }

      // manually insert a booking:
      var db = require('knex')(config[env]); 
      // db created here so that connection can be destroyed 
      // without disrupting var 'knex' defined above

      yield db.insert(rental).into('rentals')
        .then(function(resp){
          db.destroy();
        })

      var newRentStart = new Date(2016, 2, 19, 0, 00, 0);
      var newRentEnd = new Date(2016, 2, 20, 0, 00, 0);

      yield dbMethod.dateHasBookConflicts(item, newRentStart, newRentEnd)
        .then(function(bool){
          expect(bool).to.equal(false);
        })
    })

  })


  describe("dbMethods.dateIsInRange", function() {
    it_ ("Should return true if dates are within the item's date range", function * (){

      var owner = yield dbMethod.addUser('Owner', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var renter = yield dbMethod.addUser('Renter', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var itemStart = new Date(2016, 2, 17, 0, 00, 0); // March 17th, 2016 at 12AM
      var itemEnd = new Date(2016, 5, 1, 0, 00, 0); // June 1st, 2016 at 12AM
      var rentalStart = new Date(2016, 2, 21, 0, 00, 0); //March 21st, 2016 at 12AM
      var rentalEnd = new Date(2016, 4, 1, 0, 00, 0); //May 1st, 2016 at 12AM

      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': owner,
        'date_start': itemStart,
        'date_end': itemEnd
      }

      var item = yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          return itemID[0];
        })

      var rental = {
        'user_id' : renter,
        'item_id' : item,
        'date_start' : rentalStart,
        'date_end' : rentalEnd,
        'is_confirmed' : 'true'
      }

      // manually insert a booking:
      var db = require('knex')(config[env]); 
      // db created here so that connection can be destroyed 
      // without disrupting var 'knex' defined above

      yield db.insert(rental).into('rentals')
        .then(function(resp){
          db.destroy();
        })

      var newRentStart = new Date(2016, 2, 19, 0, 00, 0);
      var newRentEnd = new Date(2016, 2, 20, 0, 00, 0);

      yield dbMethod.dateIsInRange(item, newRentStart, newRentEnd)
        .then(function(bool){
          expect(bool).to.equal(true);
        })
    })

    it_ ("Should return false if dates violate the item's date range", function * (){


      var owner = yield dbMethod.addUser('Owner', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var renter = yield dbMethod.addUser('Renter', 'pass', 'test@test.com')
        .then(function(userID){
          return userID[0];
        })

      var itemStart = new Date(2016, 2, 17, 0, 00, 0); // March 17th, 2016 at 12AM
      var itemEnd = new Date(2016, 5, 1, 0, 00, 0); // June 1st, 2016 at 12AM
      var rentalStart = new Date(2016, 2, 21, 0, 00, 0); //March 21st, 2016 at 12AM
      var rentalEnd = new Date(2016, 4, 1, 0, 00, 0); //May 1st, 2016 at 12AM

      var itemObj = {
        'name': 'Lawn Mower',
        'address': '123 East Murphy Lane',
        'zip': '10507',
        'category': 'Lawn and Garden',
        'price': '10',
        'photo': 'null',
        'item_owner': owner,
        'date_start': itemStart,
        'date_end': itemEnd
      }

      var item = yield dbMethod.addItem(itemObj)
        .then(function(itemID){
          return itemID[0];
        })

      var rental = {
        'user_id' : renter,
        'item_id' : item,
        'date_start' : rentalStart,
        'date_end' : rentalEnd,
        'is_confirmed' : 'true'
      }

      // manually insert a booking:
      var db = require('knex')(config[env]); 
      // db created here so that connection can be destroyed 
      // without disrupting var 'knex' defined above

      yield db.insert(rental).into('rentals')
        .then(function(resp){
          db.destroy();
        })

      var newRentStart = new Date(2016, 1, 19, 0, 00, 0);
      var newRentEnd = new Date(2016, 2, 20, 0, 00, 0);

      yield dbMethod.dateIsInRange(item, newRentStart, newRentEnd)
        .then(function(bool){
          expect(bool).to.equal(false);
        })

    })
  })


  describe("dbMethods.addRental", function() {

    xit_ ('Should add a rental to the rentals table', function * (){

    })

    xit_ ('Should NOT add a new rental if userID is invalid', function * (){

    })

    xit_ ("MVP ONLY: Should update a booked item's isConfirmed status to 'true'" , function * (){
        //NOT NECESARY.
        //TODO: delete 'isConfirmed' from schema
    })

    xit_ ("MVP ONLY: Should NOT add a new rental if item's 'isConfirmed' is set to 'true'", function * (){
        //NOT NECESARY.
        //TODO: delete 'isConfirmed' from schema
    })
  })


 describe("dbMethods.getRentalsByRenterID", function() {
    xit_ ('Should return an array of rentals', function * (){

    })
  })


  describe("dbMethods.removeRental", function() {
    xit_ ('Should delete an item from the rentals table', function * (){

    })
  })


  //POST MVP:
  describe("dbMethods.confirmRental", function() {
    xit_ ("Should set a rental's isConfirmed status to 'true'", function * (){

    })

    xit_ ("Should delete all unconfirmed conflicting rentals", function * (){

    })
  })

  //POST MVP:
  describe("dbMethods.deConfirmRental", function() {
    xit_ ("Should set a rental's isConfirmed status to 'false'", function * (){

    })
  })

})
