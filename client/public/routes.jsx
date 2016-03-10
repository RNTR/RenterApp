var react = require('react');
var Router = require('react-router');
var Home = require('./components/Home')

modules.exports = default (
  <Route component={App}>
    <Route path="/" component={Home} />
  </Route>
)
