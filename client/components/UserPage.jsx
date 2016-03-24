var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var App = require('../App.jsx') 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');


var UserPage = React.createClass({

getInitialState: function(){


	 return {
	 	name: null,
	 	itemsForRent: null,
	 	itemsUserIsRenting: null,
	 	itemsBeingRentedFromUser: null
	 };
},

componentDidMount: function(){
	this.getUserInfo();
},

getUserInfo: function(){
	var stashedUserID = parseInt(sessionStorage.getItem('userID'));
	var promise = postRequests.getUserInfo({userID: stashedUserID});
	promise.then( (user) => {
		console.log('GOT BACK THE USER INFO FROM GET USER INFO: ', user);
		this.setState({
			name: user.user.username
		})
	})
}, 

delistItem: function(){},

getListedItems: function(){

	postRequests.getUserItemsForRent()

},


getItemsUserIsRenting: function(){

	postRequests.getStuffRentedFromOthers()

},

getCurrentRentedItems: function(){

	var promise = postRequests.stuffBeingRentedFromUser('PUT THE USER ID HERE')
	promise.then( (item) => {
		this.setState({
			itemsBeingRentedFromUser: item
		})
	})

},



render: function(){
	
	return (<div className='userPage'>
			 <div className='userContainer'>
			  <div className='userGreeting'> Welcome, <bold>{this.state.name}</bold></div>
			  
			  <div className='yourStuffForRent'> Your items for rent: 
			  	<div className='yourItemForRent'>{this.getListedItems}{this.state.itemsForRent}</div>    
			  </div>
			  	
			  <div className='stuffYouAreRenting'>Items you are renting from others:
			  	<div className='itemYouAreRenting'>{this.getItemsUserIsRenting}{this.state.itemsUserIsRenting}</div>
			  </div>
			  	  
			  <div className='stuffOthersAreRentingFromYou'>Items that others are renting from you:
			  	<div className='itemBeingRentedFromYou'>{this.getCurrentRentedItems}{this.state.itemsBeingRentedFromUser}</div>
			  </div>

			 </div>
			</div>);


}

});



module.exports = UserPage;

			





		  	

// results.map(function(results) {
// 			  		<SearchResults results={results} />
// 			  	})



