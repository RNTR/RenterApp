var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx');

var SearchResults = React.createClass({

  getInitialState: function() {

    this.handleItemName();

    return {name: "Loading...", price: null, description: ''}
  },

  handleItemName: function() {
    var promise = postRequests.searchForItem({searchTerm: sessionStorage.getItem("GlobalSearchTerm"), zipCode: parseInt(sessionStorage.getItem("GlobalSearchZip"))})
    promise.then((item) => {
      this.setState({name: item.name, price: item.price, description: item.description})
    })
  },

  render: function() {
    return (
      <div>
        <div className="newListing">NAME:
          <div >{this.state.name}</div>
        </div>
        <div className="newListing">PRICE:
          <div >${this.state.price}.00/Day</div>
        </div>
        <div className="newListing">DESCRIPTION:
          <div>{this.state.description}</div>
        </div>
      </div>
    )
  }
});

module.exports = SearchResults;
