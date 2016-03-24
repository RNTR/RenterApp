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
	 	itemsBeingRentedFromUser: null,
	 	wholeListItemObject: null,
	 	getListedItemObjectID: null
	 };
},

componentDidMount: function(){
	this.getUserInfo();
	this.getListedItems();
	this.getItemsUserIsRenting();
},

getUserInfo: function(){
	var stashedUserID = parseInt(sessionStorage.getItem('userID'));
	var promise = postRequests.getUserInfo({userID: stashedUserID});
	promise.then( (user) => {
		this.setState({
			name: user.user.username
		})
	})
}, 

delistItem: function(){},

getListedItems: function(){
	var stashedUserID = parseInt(sessionStorage.getItem('userID'));
	var promise = postRequests.getUserItemsForRent({user_id: stashedUserID});
	promise.then( (user) => {
		this.setState({
			itemsForRent: user.items[0].name,
			getListedItemObjectID: user.items[0].id
		})
	
	sessionStorage.setItem("itemID", user.items[0].id)
	
	})
	


},


getItemsUserIsRenting: function(){

	var stashedUserID = parseInt(sessionStorage.getItem('userID'));
	var promise = postRequests.getStuffRentedFromOthers({userID: stashedUserID});
	promise.then( (user) => {
		console.log('GOT BACK THE stuff rented from others: ', user);
		this.setState({
			itemsUserIsRenting: user.items[0].name
		})
	
	
	})



},

getCurrentRentedItems: function(){

	var promise = postRequests.stuffBeingRentedFromUser('PUT THE USER ID HERE')
	promise.then( (item) => {
		this.setState({
			itemsBeingRentedFromUser: item
		})
	})

},

handleItemRedirect: function(){
	console.log(this.state.getListedItemObjectID)
	sessionStorage.setItem("itemID", this.state.getListedItemObjectID) 

	this.props.history.pushState(this.state, 'item');
},



render: function(){
		console.log('ITEM FOR RENT: ', this.state.itemsForRent)
	return (<div className='userPage'>
			 <div className='userContainer'>
			  <div className='userGreeting'> Welcome, <bold>{this.state.name}</bold></div>
			  
			  <div className='yourStuffForRent'> Your items for rent: 
			  	<div className='yourItemForRent' onClick={this.handleItemRedirect}>{this.state.itemsForRent}</div>    
			  </div>
			  	
			  <div className='stuffYouAreRenting'>Items you are renting from others:
			  	<div className='itemYouAreRenting' onClick={this.handleItemRedirect}>{this.state.itemsUserIsRenting}{this.state.itemsUserIsRenting}</div>
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



