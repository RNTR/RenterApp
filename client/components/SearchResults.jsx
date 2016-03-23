var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');

var SearchResults = React.createClass({

  getInitialState: function() {
    return {
      items: ["PS4", "Xbox", "Lawn Mower", "Weed Eater"]
    }
  },

  render: function() {
    return (
      <div>
        <div className="newListing">{this.getInitialState().items[3]}</div>
      </div>
    )
  }
});

module.exports = SearchResults;
