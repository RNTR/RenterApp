var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link

var SearchResults = React.createClass({

  render: function() {
    return (
      <div>TEST!!!!, {this.props.searchResults().result}</div>
    )
  }
});

module.exports = SearchResults;


// Render multiple components
// render: function() {
//     var results = this.props.results;
//     return (
//       <ol>
//         {results.map(function(result) {
//           return <li key={result.id}>{result.text}</li>;
//         })}
//       </ol>
//     );
//   }
