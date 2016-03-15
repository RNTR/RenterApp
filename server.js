 var express = require('express');
 var path = require('path');
 var reactify = require('reactify');
 var routes = express.Router();
 var db = require('./db/dbConfig.js');
 var dbMethod = require('./db/dbMethods.js')
 var helpers = require('./serverHelpers.js')
 var webpack = require('webpack');
  
  
  //Root GET route
  routes.get('/', function (req, res) {
      res.sendFile(path.join( __dirname + '/dist/index.html' ));
  });



  // ----- USER ROUTES -----



  routes.post('/signup', function (req, res){
    // sign up a new user.
    // TODO... need auth stuff.
  })

  routes.post('/login', function (req, res){
    // log a user in.
    // TODO... need auth stuff.
  })

  routes.post('/logout', function (req, res){
    // log a user out.
    // TODO... need auth stuff.
  })

  routes.post('/users', function (req, res){
    // retrieve info about a single user.
    helpers.getUserRoute(req)
      .then(function(response){
        res.status(200).send(body)
      })
      .catch(function(err){
        res.status(400).send(error)
      })
  })

  routes.delete('/users', function (req, res){
    // delete a user's account.
  })



  // ----- ITEM ROUTES -----



  routes.post('/items', function (req, res){
    // create a new item.
  })

  routes.post('/items/search', function (req, res){
    // retrieve items that match a searched name and ZIP code
  })

  routes.post('/items/user', function (req, res){
    // retrieve items that a user owns.
  })

  routes.post('/items/user/is_renting', function (req, res){
    // retrieve items that a user is renting, will rent,
    // or has rented from others.
  })

  routes.post('/items/user/rented_from', function (req, res){
    // retrieve items being rented, that will be rented, or 
    // that have been rented from a user
  })

  routes.delete('/items', function (req, res){
    // delete an item.
  })



  // ----- RENTAL ROUTES -----



routes.post('/bookings', function (req, res){
    // add a rental if no conflicts, reject a rental
    // if conflicts exist
  })

routes.post('/bookings/item', function (req, res){
    // get all rentals for a given item
  })

routes.delete('/bookings', function (req, res){
    // delete a rental.
  })



 
 if (process.env.NODE_ENV !== 'test') {   // i.e. when in Development mode...
 
   var app = express();
   app.use( require('body-parser').json() )
   app.use('/', routes);
 
   // The Catch-all Route. Make sure this route is last.
   routes.get('/*', function(req, res){
     console.log('catch-all route triggered');
     res.sendFile(path.join( __dirname + '/dist/index.html' ));
   });
 
   // Start the server
   var port = process.env.PORT || 4000;
   app.listen(port);
   console.log("Listening on port", port);
 }
 
 else {  // i.e. when in Test mode...
 
 routes.get('/test/example_endpoint', function(req, res) {
   res.send(['Hi there, your GET request has fulfilled!'])
 })
   module.exports = routes;
 }
