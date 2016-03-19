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
        <div className="results">Search results for location: {postRequests.searchLocation().city[4].toUpperCase()}</div>
        <div className="resultsContainer">
          <a href={postRequests.searchResults().imageUrl[0]}>{postRequests.searchResults().item[0]}</a>
          <div>${postRequests.searchResults().price[0]}/day</div>
        </div>
        <div className="resultsContainer">
          <a href={postRequests.searchResults().imageUrl[1]}>{postRequests.searchResults().item[1]}</a>
            <div>${postRequests.searchResults().price[1]}/day</div>
        </div>
        <div className="resultsContainer">
          <a href={postRequests.searchResults().imageUrl[2]}>{postRequests.searchResults().item[2]}</a>
            <div>${postRequests.searchResults().price[2]}/day</div>
        </div>
        <div className="resultsContainer">
          <a href={postRequests.searchResults().imageUrl[3]}>{postRequests.searchResults().item[3]}</a>
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
