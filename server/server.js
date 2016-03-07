var express = require('express');
var path = require('path');
var reactify = require('reactify');
var routes = express.Router();
var db = require('../db/dbConfig.js') //database stuff (justin)
var webpack = require('webpack');
var config = require('../webpack.config.dev');

if (process.env.NODE_ENV !== 'test') {   // i.e. when in Development mode...
           
  var app = express();
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use('/', routes);

  //basic post route
  app.post('/ENDPOINT HERE', function (request, response) {

  });

  // The Catch-all Route. Make sure this route is last.
  routes.get('/*', function(req, res){
    console.log('catch-all route triggered');
    res.sendFile(path.join( __dirname + '/../index.html' ));
  });

  // Start the server
  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);
}

else {  // i.e. when in Test mode...
  module.exports = routes;
}
