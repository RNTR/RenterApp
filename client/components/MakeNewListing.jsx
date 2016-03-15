var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
// add additional dependencies

var MakeNewListing = React.createClass({

  listItem: function() {}, // post.js has a listNewItem function

  // there should be input fields for item description, price, name, available dates, photo, and location.

  render: function() {
    return (
      <div className="newlisting">
        <form className="newListing">
          <label>Item Name:</label>
          <br/>
          <input placeholder="Enter Item Name"></input>
        </form>
        <form className="newListing">
          <label>Item Description:</label>
          <br/>
          <textarea rows="5" cols="50" placeholder="Enter Item Description"></textarea>
        </form>
        <form className="newListing">
          <label>Photo URL:</label>
          <br/>
          <input placeholder="Enter Photo URL"></input>
        </form>
        <form className="newListing">
          <label>Dates Available:</label>
          <br/>
          <input type="date">First Available</input>
          <input type="date">Last Available</input>
        </form>
        <form className="newListing">
          <label>Price:</label>
          <div>${this.props.price}/hr</div>
        </form>
        <form className="newListing">
          <label>Zip Code:{this.props.location}</label>
					<br/>
					<button className="newListing">Create Listing!</button>
        </form>
      </div>
    )
  }

})

module.exports = MakeNewListing;
