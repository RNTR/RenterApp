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
var NavBar = require('../components/GlobalNavBar.jsx');
var HomePage = require('../components/HomePage.jsx');
var Home = require('../components/HomePage.jsx');
var UserPage = require('../components/UserPage.jsx');
var MakeNewListing = require('../components/MakeNewListing.jsx');
var Item = require('../components/ItemPage.jsx');

var routes = (
  <Router component={App}>
    <Route path="/" component={NavBar, Home} />
    <Route path='user' component={NavBar, UserPage} />
    <Route path='new' component={NavBar, MakeNewListing} /> 				
	<Route path='results' component={NavBar  /*component name*/} /> 				// the component for searchResults needs to be rendered on App.jsx
	<Route path='item' component={NavBar, Item} /> 				
	<Route path='login' component={NavBar /*component name*/} /> 				    // the component for login needs to be rendered on App.jsx
  </Router>	
)


// render((
//   <Router component={App}>
//     <Route path="/" component={NavBar, Home} />
//     <Route path='user' component={NavBar, UserPage} />
//     <Route path='new' component={NavBar, MakeNewListing} /> 					
// 	<Route path='results' component={NavBar /*component name*/} /> 				
// 	<Route path='item' component={NavBar /*component name*/} /> 				
// 	<Route path='login' component={NavBar /*component name*/} /> 				   
//   </Router>	
// ), document.body)


// const router = ReactRouter.create({
//   routes: routes,
//   location: ReactRouter.HistoryLocation
// });



module.exports = routes;




