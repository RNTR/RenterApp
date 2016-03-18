 var express = require('express');
 var path = require('path');
 var reactify = require('reactify');
 var routes = express.Router();
 var db = require('./db/dbConfig.js');
 var dbMethod = require('./db/dbMethods.js')
 var helpers = require('./serverHelpers.js')
 var webpack = require('webpack');
 var app = express();


  
// ------------ BASE ROUTE -----------



routes.get('/', function (req, res) {
  res.sendFile(path.join( __dirname + '/dist/index.html' ));
});



// ------------ USER ROUTES -----------



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
  helpers.getUserRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(400).send(err)
    })
})

routes.delete('/users', function (req, res){
  // delete a user's account.
  helpers.deleteUserRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      if (err.message === 'user was not deleted - user did not exist' || err.message === 'invalid input.'){
        res.status(400).send(err)
      } else {
        res.status(500).send(err)
      }
    })
})



// ------------ ITEM ROUTES ------------



routes.post('/items', function (req, res){
  // create a new item.
  helpers.createItemRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      if (err.message === 'We do not have a record of that items owner.'){
        res.status(400).send(err)
      } else {
        res.status(500).send(err)
      }
    })
})

routes.post('/items/search', function (req, res){
  // retrieve items that match a searched name and ZIP code
  helpers.searchItemsRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
})

routes.post('/items/user', function (req, res){
  // retrieve items that a user owns.
  helpers.getOwnedRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
})

routes.post('/items/user/is_renting', function (req, res){
  // retrieve items that a user is renting, will rent,
  // or has rented from others, along with rental info.
  helpers.isRentingRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
})

routes.post('/items/user/rented_from', function (req, res){
  // retrieve items being rented, that will be rented, or 
  // that have been rented FROM a user, along with rental info.
  helpers.rentedFromRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
})

routes.delete('/items', function (req, res){
  // delete an item.
  helpers.deleteItemRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
})



// ------------- RENTAL ROUTES ------------



routes.post('/bookings', function (req, res){
  // add a rental if: 
      // a) there are no other conflicting rentals
      // b) rental dates lie within item start/end dates
  helpers.createRentalRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      if (err.message === 'rental conflicts with an existing booking.'){
        res.status(409).send(err)
      } else if (err.message === 'booking conflict detected.'){
        res.status(409).send(err)
      } else {
        res.status(500).send(err);
      }
    })
  })

routes.post('/bookings/item', function (req, res){
  // get all rentals for a given item
  helpers.rentalsForItemRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })

  })

routes.delete('/bookings', function (req, res){
  // delete a rental.
  helpers.deleteRentalRoute(req.body)
    .then(function(response){
      res.status(200).send(response)
    })
    .catch(function(err){
      res.status(500).send(err);
    })
  })



// ------------ SERVER CONFIG ------------



// When in Development or Production mode...
if (process.env.NODE_ENV !== 'test') {   

  //*********************
  //WEBPACK CONFIGURATION: 
  //*********************

  var config = require('./webpack.config.js')
  var compiler = webpack(config);

  compiler.run(function(err, stats) {
     console.log("Errors: ", stats.hasErrors())  
  });

  compiler.watch({ // watch options:
      aggregateTimeout: 300, // wait so long for more changes
      poll: true // use polling instead of native watchers
      // pass a number to set the polling interval
  }, function(err, stats) {
      // ...
  });
   
  app.use(require('webpack-dev-middleware')(compiler, {
     noInfo: true,
     publicPath: config.output.publicPath
   }));
   
  app.use(require('webpack-hot-middleware')(compiler));
   
  var assetFolder = path.resolve(__dirname, './dist');
  routes.use(express.static(assetFolder));

  //*********************
  //EXPRESS CONFIGURATION:
  //*********************

  var app = express();
  app.use( require('body-parser').json() )
  app.use('/', routes);

  // The Catch-all Route. Make sure this route is after all others.
  routes.get('/*', function(req, res){
   res.sendFile(path.join( __dirname + '/dist/index.html' ));
  });

  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);
}

// When in Test mode...
else {  
  routes.get('/test/example_endpoint', function(req, res) {
    res.send(['Hi there, your GET request has fulfilled!'])
  })
  module.exports = routes;
}
