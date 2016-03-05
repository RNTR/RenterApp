var browserify = require('browserify-middleware');
var babelify = require('babelify');
var express = require('express');
var Path = require('path');
var sass = require('node-sass-endpoint');
var routes = express.Router();
var port = process.env.PORT || 4000;
var app = express();
var assetFolder = Path.resolve(__dirname, '../client/public');

//This handles todo requests.
var todoRouter = require('./apis/todo-api.js');
routes.use('/api/todos', todoRouter)

routes.get('/api/todo-test', function(req, res) {
  console.log("In server")
  res.status(200).send(['node', 'express', 'browserify', 'mithril'])

});

browserify.settings({
  transform: ['babelify'],
});

// Provide browserified files at a specified paths
routes.get('/app-bundle.js',
  browserify('./client/app.js'));

routes.get('/css/app-bundle.css',
  sass.serve('./client/public/sass/app.sass'));

// Static assets (html, etc.)
routes.use(express.static(assetFolder));


if (process.env.NODE_ENV !== 'test') {
  /**
    * The Catch-all Route
    * This is for supporting browser history pushstate.
    * NOTE: Make sure this route is always LAST.
  */
  routes.get('/*', (req, res) => {
    res.sendFile(`${assetFolder}/index.html`);
  });

  /**
    * We're in development or production mode;
    * create and run a real server.
  */

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router
  app.use('/', routes);
  
 

  // Start the server!
  app.listen(port);
} else {
  // We're in test mode; make this file importable instead.
  module.exports = routes;
}