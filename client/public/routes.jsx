var React = require('react');
var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = Router.Link;
var App = require('./../App.jsx');
import { Router, RouterContext, match } from 'react-router';
import { hashHistory } from 'react-router';
<Router history={hashHistory} />


var routes = (
  <Router component={App}>
    // <Route path="/" component={App} />
  </Router>
)



modules.exports = routes;



// var HomePage = require('./client/components/HomePage');
