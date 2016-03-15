var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
// add additional dependencies

var UserPage = React.createClass({

getInitialState: function(){
	return {
		username: 'tim' // this might need to refer to window.globalStateUserId to see what user is currently logged in. will need to check on this.
	};
},

navBar: function(){}, //load globalNavBar

requestsToRentees: function(){},

requestsFromRenters: function(){},

delistItem: function(){},

getListedItems: function(){},

getCurrentRentedItems: function(){},

render: function(){
	return (<div className='userPage'>
			 <div className='userGreeting'>Welcome, USER</div>
			  <div className='yourStuffForRent'> Your stuff for rent: 
			  	<div className='yourItemForRent'>TV</div>            
			  </div>
			  	<div className='stuffYouAreRenting'>Stuff you are renting from others
			  	  <div className='itemYouAreRenting'>ITEM YOU ARE RENTING</div>
			  	</div>


			</div>);


}

});



module.exports = UserPage;
