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

	// handlePhoto: function(){
	// 	postRequests.getItem({itemID: 4})
	// 	.then(function(response){
	// 	  return response.item.photo
	// 	})
	// },

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

		return ( 
		<div className="itemPage">
			  <div className="itemPhoto"></div>
			  <div className='itemDetails'>
			  	<div className="itemName">NAME: <p>{this.state.name}</p> </div>
  				<div className='itemDescription'><p>img src= {this.state.description}</p></div>
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




