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
			this.setState({ 
				name: item.name,
				photo: item.photo,
				description: item.description,
				price: item.price
			 })
		})

	},




	render: function(){
		console.log('PHOTO: ', this.state.photo)
		return ( 
		<div className="itemPage">
			  <div className="itemPhoto"> <img src={this.state.photo}></img></div>
			  <div className='itemDetails'>
			  	<div className="itemName">NAME: <p>{this.state.name}</p> </div>
  				<div className='itemDescription'><p>{this.state.description}</p></div>
		  		<div className='itemAvailability'>Item availability</div>
				<div className='itemPrice'>Item price  </div>
				<button className='rentItemDiv'> Rent this item!
		
			  	</button>
			  </div>
			</div>
			)
	}
})


		


module.exports = ItemPage;




