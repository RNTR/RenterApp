var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');


var SearchResults = React.createClass({

  render: function() {
    return (
 <div>
        <div className="results">HERE ARE YOUR SEARCH RESULTS FOR LOCATION: {postRequests.searchLocation().city[0].toUpperCase()}</div>
        <div className="resultsContainer">
          <div>{postRequests.searchResults().item[0]}</div>
          <a href={postRequests.searchResults().imageUrl[0]}>Pic Link</a>
          <div>${postRequests.searchResults().price[0]}/day</div>
        </div>
        <div className="resultsContainer">
          <div>{postRequests.searchResults().item[1]}</div>
          <a href={postRequests.searchResults().imageUrl[1]}>Pic Link</a>
            <div>${postRequests.searchResults().price[1]}/day</div>
        </div>
        <div className="resultsContainer">
          <div>{postRequests.searchResults().item[2]}</div>
          <a href={postRequests.searchResults().imageUrl[2]}>Pic Link</a>
            <div>${postRequests.searchResults().price[2]}/day</div>
        </div>
        <div className="resultsContainer">
          <div>{postRequests.searchResults().item[3]}</div>
          <a href={postRequests.searchResults().imageUrl[3]}>Pic Link</a>
            <div>${postRequests.searchResults().price[3]}/day</div>
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
