var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
import { render } from 'react-dom'

var MakeNewListing = React.createClass({

  listItem: function() {




  },

  getInitialState: function() {
    return {itemName: '', itemDescription: '', photoURL: '', firstDate: '', lastDate: '', price: '', location: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var itemName = this.state.item;
    var itemDescription = this.state.desc;
    var firstDate = this.state.first;
    var lastDate = this.state.last;
    var price = this.state.pric;
    var location = this.state.zip;
  },

  render: function() {
    return (
      <div className="newlisting">
        <form className="newListing">
          <label>Item Name:</label>    <input className="itemNameInput"placeholder="Enter Item Name" type="text" value={this.state.item} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Photo URL</label>    <input className="photoInput"placeholder="Enter Photo URL" type="url" value={this.state.pic} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Dates Available:</label>
          <br/>
         First Available <input className='newListingInput1' type="date" value={this.state.first} onChange={this.handleChange}></input>
          <br/>
         Last Available <input className='newListingInput2' type="date" value={this.state.last} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Price:</label>   <input className="priceInput" type="number" value={this.state.pric}placeholder="Enter Price"></input>
        </form>
        <form className="newListing">
          <label>ZIP:</label> <input className="locationInput"type="number" value={this.state.zip}></input>
        </form>
        <form className="newListing">
          <label>Item Description:</label>    <textarea className="itemDescriptionInput"rows="5" cols="50" placeholder="Enter Item Description" type="text" value={this.state.desc} onChange={this.handleChange}></textarea>
        </form>
        <form className="newListing">
          <button className="newListingButton" onClick={postRequests.addNewItem(document.getElementsByTagName('input'))}>SUBMIT NEW LISTING!</button>
        </form>
      </div>
    )
  }

})

module.exports = MakeNewListing;
