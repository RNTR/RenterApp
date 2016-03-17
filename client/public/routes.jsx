var React = require('react');
var Link = Router.Link;
import { Route } from 'react-router';
import { Router, RouterContext, match } from 'react-router';
import { hashHistory } from 'react-router';
import { Component } from 'react';
import { IndexRoute } from 'react-router';


var App = require('./../App.jsx').default;
var NavBar = require('../components/GlobalNavBar.jsx');
var HomePage = require('../components/HomePage.jsx');
var UserPage = require('../components/UserPage.jsx');
var MakeNewListing = require('../components/MakeNewListing.jsx');
var Item = require('../components/ItemPage.jsx');
var SearchResults = require('../components/SearchResults.jsx')

console.log("MakeNewListing ", MakeNewListing)

var routes = (
  <Router history={hashHistory} component={App} >
    <Route path="/" component={NavBar} />
    <Route path='/user' component={UserPage} />
    <Route path='/new' component={MakeNewListing} /> 
	<Route path='/results' component={NavBar} /> 
	<Route path='/item' component={NavBar} />
	<Route path='/login' component={NavBar} />
  </Router>
)










module.exports = routes;
