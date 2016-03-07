/*
 * ResultsPage
 *
 * This page displays rental search results.
 * Route: /results
 *
 */

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var ResultsPage = React.createClass({
  render: function() {
    var results = this.props.results;
    return (
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
      <Link to="/results" className="btn">Results</Link>
    )
  }
});

module.exports = ResultsPage;
