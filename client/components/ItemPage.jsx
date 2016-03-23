var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') ;


var ItemPage = React.createClass({

	getInitialState: function(){

		this.handleName();

		return {
			photo: null,
			name: 'Loading...',
			description: null,
			price: null
		};
	},

	// componentDidMount: function(){
	// 	return {
	// 		name: postRequests.getItem({itemID: 4}).name
		

	// 	};
	// },

	// handlePhoto: function(){
	// 	postRequests.getItem({itemID: 4})
	// 	.then(function(response){
	// 	  return response.item.photo
	// 	})
	// },

	handleName: function(){
		
		var promise = postRequests.getItem({itemID: 4})
		promise.then( (item) => {
			this.setState({ name: item.name })
			// item.name
		})

	},




	render: function(){
		return ( 
		<div className="itemPage">
			  <div className="itemPhoto"></div>
			  <div className='itemDetails'>
			  	<div className="itemName">NAME: <p>{this.state.name}</p> </div>

				<button className='rentItemDiv'> Rent this item!
		
			  	</button>
			  </div>
			</div>
			)
	}

})


		


module.exports = ItemPage;



  	// <div className='itemDescription'></div>
		 //  	<div className='itemAvailability'>Item availability</div>
			// <div className='itemPrice'>Item price  </div>

