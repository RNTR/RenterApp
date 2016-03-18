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
        <form className="newListing">
          <label>Item Name:</label>
          <br/>
          <input placeholder="Enter Item Name" type="text" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Item Description:</label>
          <br/>
          <textarea rows="5" cols="50" placeholder="Enter Item Description" type="text" value={this.state.value} onChange={this.handleChange}></textarea>
        </form>
        <form className="newListing">
          <label>Photo URL:</label>
          <br/>
          <input placeholder="Enter Photo URL" type="url" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Dates Available:</label>
          <br/>
          <input type="date" value={this.state.value} onChange={this.handleChange}>First Available</input>
          <input type="date" value={this.state.value} onChange={this.handleChange}>Last Available</input>
        </form>
        <form className="newListing">
          <label>Price:</label>
          <br/>
          <input placeholder="Enter Price"></input>
        </form>
        <form className="newListing">
          <label>Location:</label>
          <br/>
          <input placeholder="Enter Location"></input>
        </form>
      </div>
    )
  }

})

module.exports = MakeNewListing;
