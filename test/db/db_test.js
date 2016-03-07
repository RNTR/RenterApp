require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect
var request = require('supertest');
var db = require('../../db/dbConfig.js');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);


describe("The Database", function() {

  var app = TestHelper.createApp()
  // app.use('/', routes)
  app.testReady()


  //TODO: do some setup stuff - create tables, populate db with test data, etc.

  it_ ("Should initialize with a users table" , function() {

    //TODO: query for table information

    return knex.select('*').from('users')
      .expect(function(response){
        expect(response).to.include('users') 
      })
      })

  // it ("Should add a user to the 'Users' table", function(){

  //   //TODO: write some code to add a user here, then query the db for it.

  //   return request(app)
  //     .expect(/* username **/).to.equal(/* expected name **/)
  //     .expect(/* password **/).to.equal(/* expected value **/)
  //     .expect(/* e-mail **/).to.equal(/* expected email **/)

  // })

  // it ("Should add an item to the 'Items' table", function(){

  //   //TODO: write some code to add an item here, then query the db for it

  //   return request(app)
  //     .expect(/* name **/).to.equal(/* expected value **/)
  //     .expect(/* address **/).to.equal(/* expected value **/)
  //     .expect(/* ZIP **/).to.equal(/* expected value **/)
  //     .expect(/* category **/).to.equal(/* expected value **/)
  //     .expect(/* price **/).to.equal(/* expected value **/)
  //     .expect(/* photo **/).to.equal(/* expected value **/)

  // })

  //   it ("Should add an unconfirmed rental to the 'Rentals' table", function(){

  //   //TODO: write some code to add a rental here, then query the db for it

  //   return request(app)
  //     .expect(/* userID **/).to.equal(/* expected value **/)
  //     .expect(/* itemID **/).to.equal(/* expected value **/)
  //     .expect(/* dateStart **/).to.equal(/* expected value **/)
  //     .expect(/* dateEnd **/).to.equal(/* expected value **/)
  //     .expect(/* confirmed **/).to.equal("false")
  //     .expect(/* borndate **/).to.exist

  // })
})
