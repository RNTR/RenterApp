require('../test-helper.js');

var request = require('supertest');
var db = require(/* location of db.js, or whatever file this winds up testing **/);
var env = process.env.NODE_ENV;
var knex = require('knex')(config[env]);

describe("The Database", function() {

  var app = TestHelper.createApp()
  // app.use('/', routes)
  app.testReady()


  //TODO: do some setup stuff - create tables, populate db with test data, etc.

  it ("Should create 'Users', 'Items', and 'Rentals' tables" , function() {

    //TODO: query for table information

    return request(app)
      .expect(/* something about 'Users' **/).to.equal(/* expected result **/) 
      .expect(/* something about 'Items' **/).to.equal(/* expected result **/) 
      .expect(/* something about 'Rentals' **/).to.equal(/* expected result **/) 
      //or use '.to.include', '.to.exist', etc.
      })

  it ("Should add a user to the 'Users' table", function(){

    //TODO: write some code to add a user here, then query the db for it.

    return request(app)
      .expect(/* username **/).to.equal(/* expected name **/)
      .expect(/* password **/).to.equal(/* expected value **/)
      .expect(/* e-mail **/).to.equal(/* expected email **/)

  })

  it ("Should add an item to the 'Items' table", function(){

    //TODO: write some code to add an item here, then query the db for it

    return request(app)
      .expect(/* name **/).to.equal(/* expected value **/)
      .expect(/* address **/).to.equal(/* expected value **/)
      .expect(/* ZIP **/).to.equal(/* expected value **/)
      .expect(/* category **/).to.equal(/* expected value **/)
      .expect(/* price **/).to.equal(/* expected value **/)
      .expect(/* photo **/).to.equal(/* expected value **/)

  })

    it ("Should add an unconfirmed rental to the 'Rentals' table", function(){

    //TODO: write some code to add a rental here, then query the db for it

    return request(app)
      .expect(/* userID **/).to.equal(/* expected value **/)
      .expect(/* itemID **/).to.equal(/* expected value **/)
      .expect(/* dateStart **/).to.equal(/* expected value **/)
      .expect(/* dateEnd **/).to.equal(/* expected value **/)
      .expect(/* confirmed **/).to.equal("false")
      .expect(/* borndate **/).to.exist

  })
})
