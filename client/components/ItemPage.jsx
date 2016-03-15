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
	return console.log(this.props.getItem);
},

getItems: function(){}, //get.js has a getItems function

requestRental: function(){}, //post.js has a requestRental function

render: function(){
	return ( 
		<div className="itemPage">
		  <div className="itemName">ITEM NAME {this.props.getItem}</div>
		  <div className="itemPhoto">Photo here {this.props.getItem.itemPhoto}</div>
		  <div className='itemDescription'>Item description {this.props.getItem.itemDescription}</div>
		  <div className='itemAvailability'>Item availability</div>
		  <div className='itemPrice'>Item price</div>

		  <div className='rentItemDiv'> Rent this item!
		  	<div className='bookingCalendarDiv'>Booking calendar</div>
		  	<div className='bookItemButton'>Book this item!</div>

		  </div>

		</div>  )
}

})



module.exports = ItemPage;
