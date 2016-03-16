var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link

var SearchResults = React.createClass({

  render: function() {
    return (
      <div>
        <div className="results">HERE ARE YOUR SEARCH RESULTS FOR LOCATION: {this.props.searchLocation().city[0].toUpperCase()}</div>
        <div className="resultsContainer">
          <div>{this.props.searchResults().item[0]}</div>
          <a href={this.props.searchResults().imageUrl[0]}>Pic Link</a>
        </div>
        <div className="resultsContainer">
          <div>{this.props.searchResults().item[1]}</div>
          <a href={this.props.searchResults().imageUrl[1]}>Pic Link</a>
        </div>
        <div className="resultsContainer">
          <div>{this.props.searchResults().item[2]}</div>
          <a href={this.props.searchResults().imageUrl[2]}>Pic Link</a>
        </div>
        <div className="resultsContainer">
          <div>{this.props.searchResults().item[3]}</div>
          <a href={this.props.searchResults().imageUrl[3]}>Pic Link</a>
        </div>
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

// Template
// const rows = this.props.shelters.map((shelter) => {
//   if (shelter.shelterName.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0) {
//     return (
//       <div key={shelter.shelterID} className="shelterCard">
//         <Link to={'/shelterprofile/' + shelter.shelterName}>
//           <div>
//           <p></p>
//               <p>
//               <div className="shelterInfo">
//               {shelter.shelterName}
//              <div> organizied by {shelter.organizationName} located at {shelter.locationName}</div>
//             </div>
//             </p>
//
//           </div>
//         </Link>
//       </div>
//     );
//   }
// });
