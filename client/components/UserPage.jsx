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


	 	itemsBeingRentedFromUser: 'something',
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
		console.log('got owned items back: ', user)
		console.log('here are items for rent: ', user.items)
		this.setState({
			itemsForRent: user.items,
			getListedItemObjectID: user.items[0].id //1st item's id. may not be necessary in a min.
		})
		console.log('this.state after getting items: ',this.state)
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
		console.log('DSOFIHSDFIHADSFIOASHDFOIAUSDHFA: ', item.itemsWithRentals[2])
	
				this.setState({
					itemsBeingRentedFromUser: item.itemsWithRentals[2].name
				})
	})

},

// item.items[0][0].name


handleitemBeingRentedFromYouChange: function(e){
	this.setState({
      itemsBeingRentedFromUser: e.target.value
    });
},







								/******* REDIRECT FUNCTIONS ********/


handleItemRedirect: function(itemID){
	var id = itemID || this.state.getListedItemObjectID;
	sessionStorage.setItem("itemID", id) ;
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
	var ownedItems = this.state.itemsForRent; 
	var wrangled = this;
	console.log('here is wrangled.state: ',wrangled.state)
	console.log('here is ownedItems: ',ownedItems)

	if (ownedItems !== null){
		return (<div className='userPage'>
				 <div className='userContainer'>
				  <div className='userGreeting'> Welcome, <bold>{this.state.name}</bold></div>
					  <div className='yourStuffForRent'> Your items for rent: 
					  {ownedItems.map(function(item,index){
		              return  <div className='yourItemForRent' onClick={function(){wrangled.handleItemRedirect(item.id)}}>{item.name}</div>
		            })}
  
				  </div>
				  	
				  <div className='stuffYouAreRenting'>Items you are renting from others:
				  	<div className='itemYouAreRenting' onClick={wrangled.handleitemsUserIsRentingRedirect}>{wrangled.state.itemsUserIsRenting}</div>
				  </div>
				  	  
				  <div className='stuffOthersAreRentingFromYou'>Items that others are renting from you:
				  	<div className='itemBeingRentedFromYou' onChange={wrangled.handleitemBeingRentedFromYouChange} onClick={wrangled.handlegetCurrentRentedItemsItemRedirect}>{wrangled.state.itemsBeingRentedFromUser}</div>
				  </div>

				 </div>
				</div>);
	} else {
				return (<div className='userPage'>
				 <div className='userContainer'>
				  <div className='userGreeting'> Welcome, <bold>{this.state.name}</bold></div>
					  <div className='yourStuffForRent'> Your items for rent:   
				  </div>
				  	
				  <div className='stuffYouAreRenting'>Items you are renting from others:
				  	<div className='itemYouAreRenting' onClick={this.handleitemsUserIsRentingRedirect}>{this.state.itemsUserIsRenting}</div>
				  </div>
				  	  
				  <div className='stuffOthersAreRentingFromYou'>Items that others are renting from you:
				  	<div className='itemBeingRentedFromYou' onChange={this.handleitemBeingRentedFromYouChange} onClick={this.handlegetCurrentRentedItemsItemRedirect}>{this.state.itemsBeingRentedFromUser}</div>
				  </div>

				 </div>
				</div>);
	}



}

});



module.exports = UserPage;

			





		  	

// results.map(function(results) {
// 			  		<SearchResults results={results} />
// 			  	})



