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
  },

  render: function() {
    return (
      <div className="newlisting">
        <form className="newListing">
          <label>Item Name:</label>    <input className="itemNameInput"placeholder="Enter Item Name" type="text" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Photo URL</label>    <input className="photoInput"placeholder="Enter Photo URL" type="url" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Dates Available:</label>
          <br/>
         First Available <input className='newListingInput1' type="date" value={this.state.value} onChange={this.handleChange}></input>
          <br/>
         Last Available <input className='newListingInput2' type="date" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <form className="newListing">
          <label>Price:</label>   <input className="priceInput" type="number" value={this.state.value}placeholder="Enter Price"></input>
        </form>
        <form className="newListing">
          <label>ZIP:</label> <input className="locationInput"type="number" value={this.state.value}></input>
        </form>
        <form className="newListing">
          <label>Item Description:</label>    <textarea className="itemDescriptionInput"rows="5" cols="50" placeholder="Enter Item Description" type="text" value={this.state.value} onChange={this.handleChange}></textarea>
        </form>
        <form className="newListing">
          <button className="newListingButton" onClick={postRequests.addNewItem(document.getElementsByTagName('input'))}>SUBMIT NEW LISTING!</button>
        </form>
        <div>{this.listItem()}</div>
      </div>
    )
  }

})

module.exports = MakeNewListing;
