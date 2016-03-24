var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
import { render } from 'react-dom'
var App = require('../App.jsx') 

var MakeNewListing = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      address: '',
      zip: null,
      category: '',
      price: null,
      photo: '',
      item_owner: 1,
      date_start: '',
      date_end: '',
      description: ''
    };

  },
  
  handleNameChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  handlePhotoChange: function(e) {
    this.setState({
      photo: e.target.value
    });
  },

  handleZipChange: function(e) {
    this.setState({
      zip: parseInt(e.target.value)
    });
  },
  
  handlePriceChange: function(e) {
    this.setState({
      price: parseInt(e.target.value)
    });
  },
  
  handleDateStartChange: function(e) {
    this.setState({
      date_start: e.target.value
    });
  },
  
  handleDateEndChange: function(e) {
    this.setState({
      date_end: e.target.value
    });
  },

  handleDescriptionChange: function(e) {
    this.setState({
      description: e.target.value
    });
  },

  submit: function(){
  var scopeReference = this;
  postRequests.addNewItem({item:this.state})
    .then(function(item){
      sessionStorage.setItem('currentItemID', item.item.id);
    })
    .then(function(){
      scopeReference.handleRedirect();
  })

  

  },

  handleRedirect: function(){
    this.props.history.pushState(this.state, 'item');
  },

  render: function() {
    return (
      <div className="newlisting">
        <form className="newListing" onSubmit={this.submit}>
            
            <label>Item Name  </label><input className="itemNameInput" type="text" value={this.state.name} onChange={this.handleNameChange}></input>
            <label>Photo URL  </label><input className="photoInput" type="text" value={this.state.photo} onChange={this.handlePhotoChange}></input>
            <label>Dates Available  </label>
                    <br/>
                First Available  <input className='newListingInput1' type="date" value={this.state.date_start} onChange={this.handleDateStartChange}></input>
                    <br/>
                Last Available  <input className='newListingInput2' type="date" value={this.state.date_end} onChange={this.handleDateEndChange}></input> 
                <br/>
            <label>$  </label><input className="priceInput" type="number" value={this.state.price} onChange={this.handlePriceChange}></input>
                <br/>
            <label>ZIP  </label><input className="locationInput"type="number" onChange={this.handleZipChange} value={this.state.zip}></input>
                <br/>
            <label>Description  </label><textarea className="itemDescriptionInput"rows="5" cols="50"  type="text" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
          
            <button className="newListingButton" type="submit">SUBMIT NEW LISTING!</button>

        </form>
      </div>


    )
  }

})

module.exports = MakeNewListing;




      
      
   
