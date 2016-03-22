var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var App = require('../App.jsx') 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');


var UserPage = React.createClass({

getInitialState: function(){
	 return {};
},

componentDidMount: function(){

},

getUserInfo: function(){

}, 

requestsToRentees: function(){},

requestsFromRenters: function(){},

delistItem: function(){},

getListedItems: function(){},

getCurrentRentedItems: function(){},

render: function(){
	
	return (<div className='userPage'>
			 
			  <div className='userGreeting'> Welcome, {postRequests.getUserInfo()}</div>
			  
			  <div className='yourStuffForRent'> Your items for rent: 
			  	<div className='yourItemForRent'>{postRequests.getUserItemsForRent()}</div>    
			  </div>
			  	
			  <div className='stuffYouAreRenting'>Items you are renting from others:
			  	<div className='itemYouAreRenting'>{postRequests.getStuffRentedFromOthers()}</div>
			  </div>
			  	  
			  <div className='stuffOthersAreRentingFromYou'>Items that others are renting from you:
			  	<div className='itemBeingRentedFromYou'>{postRequests.stuffBeingRentedFromUser()}</div>
			  </div>


			</div>);


}

});



module.exports = UserPage;

			





		  	

// results.map(function(results) {
// 			  		<SearchResults results={results} />
// 			  	})



