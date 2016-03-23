var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') 


var ItemPage = React.createClass({

getInitialState: function(){
	return {
		photo: null,
		name: null,
		description: null,
		price: null
	};
},

componentDidMount: function(){
	return {

	

	};
},

handlePhoto: function(){
	postRequests.getItem({itemID: 4})
	.then(function(response){
	  return response.item.photo
	})
},

handleName: function(){
   this.setState({
      name: postRequests.getItem({itemID: 4}).name
    });
},




render: function(){
	return ( 
	<div className="itemPage">
		  <div className="itemPhoto"></div>
		  <div className='itemDetails'>
		  	<div className="itemName" value={this.state.name}>{this.handleName}</div>
		  	<div className='itemDescription'></div>
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



