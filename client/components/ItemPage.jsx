var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') ;


var ItemPage = React.createClass({

	getInitialState: function(){

		// this.fetchItem();

		return {
			photo: null,
			name: 'Loading...',
			description: null,
			price: null
		};
	},

	componentDidMount: function(){	
		this.fetchItem();
	},



	fetchItem: function(){
		var stashedItemID = parseInt(sessionStorage.getItem('currentItemID'));
		var promise = postRequests.getItem({ itemID: stashedItemID })
		promise.then( (item) => {
			console.log('THIS IS THE ITEM OBJECT', item)
			this.setState({ 
				name: item.name,
				photo: item.photo,
				description: item.description,
				price: item.price,
				zip: item.zip
			 })
		})

	},

	handleItemRent: function(){
		alert('RENT')
	},




	render: function(){
		console.log('PHOTO: ', this.state.photo)
		return ( 
		<form className="itemPage" onSubmit={this.handleItemRent}>
			  <div className="itemPhoto"><img src={this.state.photo} width='250' height='250' ></img></div>
			  <div className='itemDetails'>
			  	<div className="itemName"> <p>{this.state.name}</p> </div>
  				<div className='itemDescription'><p>{this.state.description}</p></div>
  				<div className="itemZip">Located in {this.state.zip} </div>
		  		<div className='itemAvailability'>Item availability</div>
				<div className='itemPrice'>Price/hr ${this.state.price} </div>
				<br/>
				<button className='rentItemDiv'> Rent this item!
		
			  	</button>
			  </div>
			</form>
			)
	}
})


		


module.exports = ItemPage;




