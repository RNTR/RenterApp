var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var NotFound = React.createClass ({
  render: function() {
    return(
      <article>
        <h1>Page not found.</h1>
        <Link to="/" className="btn">Home</Link>
      </article>
    );
  }
})

module.exports = NotFound;
