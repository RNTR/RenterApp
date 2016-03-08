require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect
var request = require('supertest');
var env = process.env.NODE_ENV;
var db = require('../../db/dbConfig.js');
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);


describe("The Database", function() {


  //TODO: do some setup stuff - create tables, populate db with test data, etc.

  it ("Should initialize with a users, items, and rentals table" , function() {

    //TODO: get knex to play nicely in the dev environment. Check on promises - possibly bluebird/check gilberts solution
    expect(1+1).to.equal(12)

    knex.select('*').from('users')
      .then(function(response){
        expect(response).to.include('username');
        expect(1).to.equal(2);
      })

    knex.select('*').from('items')
      .then(function(response){
        expect(response).to.include('price') 
      })

    knex.select('*').from('rentals')
      .then(function(response){
        expect(response).to.include('is_confirmed') 
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
