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
	 	getListedItemObjectID: null,


	 	itemsUserIsRenting: null,
	 	itemsUserIsRentingObjectID: null,


	 	itemsBeingRentedFromUser: null,
	 	itemsBeingRentedFromUserObjectID: null
	 	
	 };
},

componentDidMount: function(){
	this.getUserInfo();
	this.getListedItems();
	this.getItemsUserIsRenting();
	this.getCurrentRentedItems();
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
	promise.then( (item) => {
		
			if(item === 'NO CURRENT RENTALS'){

				this.setState({
					itemsUserIsRenting: 'You are not currently renting anything.'
				})

			}

				else{
		


			this.setState({
				itemsUserIsRenting: item.items[0].name,
				itemsUserIsRentingObjectID: item.items[0].id
			})
	
		}

	})



},

getCurrentRentedItems: function(){

	var stashedUserID = parseInt(sessionStorage.getItem('userID'));
	console.log('stashedUserID', stashedUserID)
	var promise = postRequests.stuffBeingRentedFromUser({owner: stashedUserID})
	promise.then( (item) => {
		console.log('DSOFIHSDFIHADSFIOASHDFOIAUSDHFA: ', item)
	
				this.setState({
					itemsBeingRentedFromUser: item
				})
	})

},

// item.items[0][0].name




								/******* REDIRECT FUNCTIONS ********/


handleItemRedirect: function(){
	sessionStorage.setItem("itemID", this.state.getListedItemObjectID) 
	this.props.history.pushState(this.state, 'item');
},

handleitemsUserIsRentingRedirect: function(){
	sessionStorage.setItem("itemID", this.state.itemsUserIsRentingObjectID)
	if(this.state.itemsUserIsRentingObjectID !== null){
			this.props.history.pushState(this.state, 'item');
	} 
},

handlegetCurrentRentedItemsItemRedirect: function(){
	sessionStorage.setItem("itemID", this.state.getListedItemObjectID) 
	this.props.history.pushState(this.state, 'item');
},




render: function(){

	return (<div className='userPage'>
			 <div className='userContainer'>
			  <div className='userGreeting'> Welcome, <bold>{this.state.name}</bold></div>
			  
			  <div className='yourStuffForRent'> Your items for rent: 
			  	<div className='yourItemForRent' onClick={this.handleItemRedirect}>{this.state.itemsForRent}</div>    
			  </div>
			  	
			  <div className='stuffYouAreRenting'>Items you are renting from others:
			  	<div className='itemYouAreRenting' onClick={this.handleitemsUserIsRentingRedirect}>{this.state.itemsUserIsRenting}</div>
			  </div>
			  	  
			  <div className='stuffOthersAreRentingFromYou'>Items that others are renting from you:
			  	<div className='itemBeingRentedFromYou' onClick={this.handlegetCurrentRentedItemsItemRedirect}>{this.state.itemsBeingRentedFromUser}</div>
			  </div>

			 </div>
			</div>);


}

});



module.exports = UserPage;

			





		  	

// results.map(function(results) {
// 			  		<SearchResults results={results} />
// 			  	})



