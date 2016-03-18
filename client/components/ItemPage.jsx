var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');


var ItemPage = React.createClass({

getInitialState: function(){
	return {};
},

componentDidMount: function(){
	return {};
},

getItems: function(){

}, 

requestRental: function(){},

render: function(){
	return ( 
	<div className="itemPage">
		  <div className="itemPhoto"><img src= {postRequests.getItem().itemPhoto}/></div>
		  <div className='itemDetails'>
		  	<div className="itemName">{postRequests.getItem().itemName}</div>
		  	<div className='itemDescription'>{postRequests.getItem().itemDescription}</div>
		  	<div className='itemAvailability'>Item availability</div>
			<div className='itemPrice'>Item price</div>
			<div className='rentItemDiv'> Rent this item!
	
		  </div>
		  </div>
		</div>
		)
}

})



module.exports = ItemPage;



	  		// <div className='bookingCalendarDiv'>Booking calendar</div>
		  	// 	<div className='bookItemButton'>Book this item!</div>