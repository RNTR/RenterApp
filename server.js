 var express = require('express');
 var path = require('path');
 var reactify = require('reactify');
 var routes = express.Router();
 var db = require('./db/dbConfig.js');
 var webpack = require('webpack');
  
  
  //generic GET route
  routes.get('/', function (req, res) {
      res.sendFile(path.join( __dirname + '/client/public/index.html' ));
  });
 
 //generic POST route
 routes.post('/ENDPOINT HERE', function (req, res) {
  //take an action here.
 });
 
 if (process.env.NODE_ENV !== 'test') {   // i.e. when in Development mode...
 
   var app = express();
   app.use( require('body-parser').json() )
   app.use('/', routes);
 
   // The Catch-all Route. Make sure this route is last.
   routes.get('/*', function(req, res){
     console.log('catch-all route triggered');
     res.sendFile(path.join( __dirname + '/client/public/index.html' ));
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