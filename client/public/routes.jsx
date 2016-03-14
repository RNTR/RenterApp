var React = require('react');
var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = Router.Link;
import { Router, RouterContext, match } from 'react-router';
import { hashHistory } from 'react-router';
<Router history={hashHistory} />
var App = require('./../App.jsx');
var GlobalNavBar = require('../components/GlobalNavBar.jsx');
var HomePage = require('../components/HomePage.jsx');
var UserPage = require('../components/UserPage.jsx');





var routes = (
  <Router component={App}>
    <Route path="/" component={Home, NavBar, UserPage} />
    // <Route path='user' component={UserPage} />
  </Router>
)



module.exports = routes;




