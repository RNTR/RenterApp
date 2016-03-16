var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
// add additional dependencies

var ItemPage = React.createClass({

getInitialState: function(){
	return {};
},

componentDidMount: function(){
	return {};
},

getItems: function(){
	return this.props.getItem
}, 

requestRental: function(){}, //post.js has a requestRental function

render: function(){
	return ( 
		<div className="itemPage">
		  <div className="itemName">{this.props.getItem().itemName}</div>
		  <div className="itemPhoto"><img src= {this.props.getItem().itemPhoto}/></div>
		  <div className='itemDescription'>{this.props.getItem().itemDescription}</div>
		  <div className='itemDetails'>
		  	<div className='itemAvailability'>Item availability</div>
			<div className='itemPrice'>Item price</div>
		  </div>
		  <div className='rentItemDiv'> Rent this item!
		  	<div className='bookingCalendarDiv'>Booking calendar</div>
		  	<div className='bookItemButton'>Book this item!</div>
		  </div>

		</div>  )
}

})



module.exports = ItemPage;
