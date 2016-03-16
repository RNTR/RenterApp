var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link

var SearchResults = React.createClass({

  render: function() {
    return (
      <div className="results">
        <div className="results">HERE ARE YOUR SEARCH RESULTS FOR LOCATION >{this.props.location}</div>
        <div className="results">{this.props.searchResults().result[0]}</div>
        <div className="results">{this.props.searchResults().result[1]}</div>
        <div className="results">{this.props.searchResults().result[2]}</div>
        <div className="results">{this.props.searchResults().result[3]}</div>
      </div>
    )
	}
});

module.exports = SearchResults;

// Render multiple components
// render: function() {
// 	var results = this.props.results;
// 	return (
// 		<ol>
// 			{results.map(function(result) {
// 				return <li key={result.id}>{result.text}</li>;
// 			})}
// 		</ol>
// 	);
// }
