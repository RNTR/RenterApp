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
	postRequests.getItem(window.globalStateItemID)
},

getItems: function(){

}, 

submit: function(){

	postRequests.getItem(window.globalStateItemID)
},

render: function(){
	return ( 
	<div className="itemPage">
		  <div className="itemPhoto"><img src= {postRequests.getItem().photo}/></div>
		  <div className='itemDetails'>
		  	<div className="itemName">{postRequests.getItem().name}</div>
		  	<div className='itemDescription'>{postRequests.getItem().description}</div>
		  	<div className='itemAvailability'>Item availability</div>
			<div className='itemPrice'>Item price {postRequests.getItem().price} </div>
			<button className='rentItemDiv'> Rent this item!
	
		  	</button>
		  </div>
		</div>
		)
}

})



module.exports = ItemPage;



