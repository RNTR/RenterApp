var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') ;

var SearchResults = React.createClass({

  getInitialState: function() {

    this.handleItemName();

    return {
      name: "Loading..."
    }
  },

  handleItemName: function() {
    var promise = postRequests.searchForItem({searchTerm: "Xbox", zipCode: 78701})
    promise.then( (item) => {
      this.setState({name: item.name})
    })
  },

  render: function() {
    return (
      <div>
        <div className="newListing">NAME:</div>
        <div className="newListing">{this.state.name}</div>
      </div>
    )
  }
});

module.exports = SearchResults;
