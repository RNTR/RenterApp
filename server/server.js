var browserify = require('browserify-middleware');
var express = require('express');
var Path = require('path');
var Reactify = require('reactify');
var routes = express.Router();
//TODO: require database stuff

routes.get('/app-bundle.js', // <<< ENSURE THIS IS CORRECT FILE
  browserify('./client/app.js', {
    transform: [Reactify]
  }));

// routes.get('/api/example', function(req, res) {
//   res.send(['node', 'express', 'browserify', 'react', 'react-dom']);
// });

var assetFolder = Path.resolve(__dirname, '../client/public'); // <<< ENSURE THIS IS CORRECT LOCATION
routes.use(express.static(assetFolder));


if (process.env.NODE_ENV !== 'test') {   // Development mode
           
  var app = express();

  app.use('/', routes);

  app.post('/ENDPOINT HERE', function (request, response) {

  });

  // The Catch-all Route. Make sure this route is last.
  routes.get('/*', function(req, res){
    console.log('catch-all route triggered');
    res.sendFile( assetFolder + '/index.html' );
  });

  // Start the server
  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);
}

else {                                  // Test mode
  module.exports = routes;
}
