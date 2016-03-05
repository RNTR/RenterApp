/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
var React = require('react');
var Nav = require('./Nav.react');

var App = React.createClass ({
  render: function() {
    return(
      <div className="wrapper">
        <Nav history={this.props.history} location={this.props.location} />
        { this.props.children }
      </div>
    )
  }
});

module.exports = App;
