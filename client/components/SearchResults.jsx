var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') ;

var SearchResults = React.createClass({

  getInitialState: function() {
    return {
      items: ["PS4", "Xbox", "Lawn Mower", "Weed Eater"]
    }
  },

  render: function() {
    return (
      <div>
        <div className="newListing">NAME:</div>
        <div className="newListing">{postRequests.searchForItem.items}</div>
      </div>
    )
  }
});

module.exports = SearchResults;
