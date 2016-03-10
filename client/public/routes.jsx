var react = require('react');
var Router = require('react-router');
var Home = require('./components/Home')
var Link = Router.Link 

modules.exports = default (
  <Route component={App}>
    <Route path="/" component={Home} />
  </Route>
)
