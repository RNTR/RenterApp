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

<<<<<<< HEAD
var ResultsPage = React.createClass({
  render: function() {
    var results = this.props.results;
    return (
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    )
  }
});
=======
 var ResultsPage = React.createClass ({
 	render: function() {
     return (
 			<ul>{this.props.children}</ul>
 		);
   }
 });
>>>>>>> List items

module.exports = ResultsPage;

// HEYOOOOO
