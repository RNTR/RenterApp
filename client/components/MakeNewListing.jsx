var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');



var MakeNewListing = React.createClass({

  listItem: function() {}, // post.js has a listNewItem function

  // there should be input fields for item description, price, name, available dates, photo, and location.

  getInitialState: function() {
    return {};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    return (
      <div className="newlisting">
      MAKE NEW LISTING
      </div>
    )
  }

})

module.exports = MakeNewListing;





