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
        <div className="results">HERE ARE YOUR SEARCH RESULTS FOR LOCATION: {postRequests.searchLocation().city[4].toUpperCase()}</div>
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



// Template
// var items = [
//   { name: "Matthew", link: "https://bible.com/1/mat.1" },
//   { name: "Mark", link: "https://bible.com/1/mrk.1" },
//   { name: "Luke", link: "https://bible.com/1/luk.1" },
//   { name: "John", link: "https://bible.com/1/jhn.1" }
// ];
//
// var RepeatModule = React.createClass({
//   getDefaultProps: function() {
//     return { items: [] }
//   },
//   render: function() {
//
//     var listItems = this.props.items.map(function(item) {
//       return (
//         <li key="{item.name}">
//           <a href="{item.link}">{item.name}</a>
//         </li>
//       );
//     });
//
//     return (
//       <div>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     );
//   }
// });
