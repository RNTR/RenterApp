require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var env = process.env.NODE_ENV;
var db = require('../../db/dbConfig.js');
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var dbMethod = require('../../db/dbMethods.js');

// knex.migrate.latest([config]); //the damn db 'RNTR_test' isn't migrating/populating with tables!
console.log(env);

describe("The Database", function() {

  //TODO: do some setup stuff - create tables, populate db with test data, etc.

  it ("Should pass a basic test: 1 === 1" , function() {

    //placeholder test:
    expect(1).to.equal(1);

    })

  it_ ('Should add a new user to the users table', function * (){
    yield dbMethod.addUser('jeffrey', '1234', 'jeffrey@netscape.net')
      .then(function(something){
        expect(something[0]).to.be.a('number')
      })
  })

  xit_ ('Should return true if a user exists', function * (){
    yield dbMethod.addUser('larry', 'larryPassword', 'larry.larry@larry.larry')
      .then(function(userInfo){
        dbMethod.userExists(userInfo[0])
          .then(function(bool){
            expect(bool).to.equal(true)
          })
      })
  })

  xit_ ('Should delete a user from the users table', function * (){
    yield dbMethod.addUser('franky', 'password1', 'nigerianPrince@aol.com')
      .then(function(userId){
        dbMethod.removeUser(userId[0])
        .then(function(){
          dbMethod.userExists()  //thinking about making a userExists/ getUsers method which would take the userID. should fail after removeUser is called.
      })
    })
  })

  xit ('Should add a new item to the items table', function(){



  })

  xit ('Should delete an item from the items table', function(){



  })

  xit ('Should add item to the rentals table', function(){



  })

  xit ('Should delete an item to the rentals table', function(){



  })



})
