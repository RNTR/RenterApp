require('../test-helper.js');

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');
var routes = require('../../server.js');
var env = process.env.NODE_ENV;
var config = require('../../knexfile.js');
var knex = require('knex')(config[env]);
var Promise = require('bluebird');
var dbMethod = require('../../db/dbMethods.js');


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


  describe("General", function() {
    it_ ("should serve an example endpoint", function * (){
      yield request(app)
        .get('/test/example_endpoint')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('Hi there, your GET request has fulfilled!');
        })
    })

    it_ ("should serve an html page on '/'", function * (){
      yield request(app)
        .get('/')
        .expect(200)
        .expect(function(response) {
          expect(response.type).to.equal('text/html');
          expect(response.text).to.include('!DOCTYPE html>' || '!DOCTYPE html>\n'); //this may need to be deactivated... iffy test condition.
        })
    })
  })

  describe("Users", function() {
    xit_ ("(POST, /signup) : should sign up new users", function * (){
      var user = {
        username : 'MustardForBreakfast',
        password : 'password',
        email : 'test@test.com'
      }

      var body = {
        'user' : user,
        'message' : 'here is a user.'
      }

      yield request(app)
        .post('/signup')
        .send(body)
        .expect(200)
        .expect(function(response) {
          expect(response.body.status).to.equal('completed');
          expect(response.body.user).to.exist;
        })

    //attempt to sign up with a claimed username
    yield request(app)
      .post('/signup')
        .send(body)
        .expect(400)
        .expect(function(response) {
          expect(response.body.status).to.equal('failed');
          expect(response.body.message).to.equal('That username is taken.'); 
        })
    })

    xit_ ("(POST, /login) : should sign in existing users", function * (){
      var userID = yield dbMethod.addUser('MustardForBreakfast', 'password', 'example@email.com')
        .then(function(IDArray){
          return IDArray[0];
        })

      var user = {
        username : 'MustardForBreakfast',
        password : 'password',
      }

      var body = {
        'user' : user,
        'message' : 'here is a user.'
      }

      yield request(app)
        .post('/login')
        .send(body)
        .expect(200)
        .expect(function(response) {
          expect(response.body.status).to.equal('completed');
          expect(response.body.user).to.exist;
          expect(response.body.user.username).to.equal('MustardForBreakfast')
        })

      //attempt to sign in when already signed in
      yield request(app)
        .post('/login')
          .send(body)
          .expect(400)
          .expect(function(response) {
            expect(response.body.status).to.equal('failed');
            expect(response.body.message).to.equal('User already signed in!'); 
          })
    })

    xit_ ("(DELETE, /users) : should delete a user", function * (){
      var userID = yield dbMethod.addUser('MustardForBreakfast', 'password', 'example@email.com')
        .then(function(IDArray){
          return IDArray[0];
        })

      var user = {
        username : 'MustardForBreakfast',
        'userID' : userID, //not technically necessary - either uername or id works, as both are unique
        password : 'password'
      }

      var body = {
        'user' : user,
        'message' : 'here is a user.'
      }

      yield request(app)
        .delete('/users')
        .send(body)
        .expect(200)
        .expect(function(response) {
          expect(response.body.status).to.equal('complete');
          expect(response.body.message).to.equal('user deleted');
        })
    })

    xit_ ("(POST, /users) : should retrieve information about a single user", function * (){
      //add a user
      var userID = yield dbMethod.addUser('MustardForBreakfast', 'password', 'example@email.com')
        .then(function(IDArray){
          return IDArray[0];
        })

      var body = {
        'userID' : userID,
        'message' : 'here is a user.'
      }

      yield request(app)
        .post('/users')
        .send(body)
        .expect(200)
        .expect(function(response) {
          expect(response.body.status).to.equal('complete');
          expect(response.body.user).to.exist;
          expect(response.body.user.username).to.equal('MustardForBreakfast');
        })
    })

    xit_ ("(POST, /logout) : should log a user out", function * (){
      //add a user
      var userID = yield dbMethod.addUser('MustardForBreakfast', 'password', 'example@email.com')
        .then(function(IDArray){
          return IDArray[0];
        })

      var user = {
        username : 'MustardForBreakfast',
        password : 'password',
      }

      var loginBody = {
        'user' : user,
        'message' : 'here is a user.'
      }

      //log that user in
      yield request(app)
        .post('/login')
        .send(loginBody)

      var body = {
        'userID' : userID,
        'message' : 'here is a user.'
      }

      yield request(app)
        .post('/logout')
        .send(body)
        .expect(200)
        .expect(function(response) {
          expect(response.body.status).to.equal('complete');
          expect(response.body.message).to.equal('logout successful.')
        })
    })
  })

  describe("Items", function() {
    
    xit_ ("(POST, /items) : should create a new item", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    }) 

    xit_ ("(GET, /items) : should get searched items by name and zipcode", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    })

    xit_ ("(DELETE, /items) : should delete an item", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    }) 

    xit_ ("(GET, /items/user) : should get items that a user owns", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    })   

    xit_ ("(GET, /items/user/is_renting) : should get items a user is renting", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    })

    xit_ ("(GET, /items/user/rented_from) : should get items being rented from a user", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    }) 
  })

  describe("Rentals", function() {
    xit_ ("(POST, /bookings) : should make a new booking if no conflicts", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    })

    xit_ ("(GET, /bookings) : should get bookings for a given item", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    })

    xit_ ("(DELETE, /bookings) : should delete a booking", function * (){
      yield request(app)
        .get('A ROUTE HERE')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('test');
        })
    })
  })


})