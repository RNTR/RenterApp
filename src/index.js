var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('react-redux');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var FontFaceObserver = require('fontfaceobserver');

var Provider = Redux.provider;
var browserHistory = Router.browserhistory;

// import pages for routing
var HomePage = require('./components/pages/HomePage.react');
var NotFound = require('./components/pages/NotFound.react');
var App = require('./components/App.react');

// Import the CSS file, which webpack transfers to the build folder
require('./css/main.css');


ReactDOM.render(
	  <div>
	    <Router history={browserHistory}>
	      <Route component={App}>
	        <Route path="/" component={HomePage} />
	        <Route path="*" component={NotFound} />
	      </Route>
	    </Router>
  	</div>, 
	document.getElementById('app')
);
