var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = Router.Link; 
// var HomePage = require('../../components/HomePage');
// var App = require('../../components/App');

var routes = (
  <Router component={App}>
    <Route path="/" component={HomePage} />
  </Router>
)



modules.exports = routes;