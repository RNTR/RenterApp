var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
import {render} from 'react-dom'
var HomePage = require('../components/HomePage.jsx')
var App = require('../App.jsx');
import { hashHistory } from 'react-router';
import { RouterContext, match } from 'react-router';
import { History } from 'react-router';
require('../css/styles.css');



var GlobalNavBar = React.createClass({

getInitialState: function(){
		return {
			searchTerm: null,
			zipCode: null
		};
	},

componentDidMount: function(){
	
	this.loggedInCheck();

},

loggedInCheck: function(){

	var userID = parseInt(sessionStorage.getItem('userID'));

	if (userID === null) {

	   return document.getElementsByClassName( 'logoutButton' ).style.display = 'none';

	}

},


handleSearch: function(e){
		this.setState({
			searchTerm: e.target.value
		})
	},

handleZip: function(e){
		this.setState({
			zipCode: parseInt(e.target.value)
		})
	},

handleSearchRedirect: function(){

		sessionStorage.setItem("GlobalSearchTerm", this.state.searchTerm)
		sessionStorage.setItem("GlobalSearchZip", this.state.zipCode)
	    this.props.history.hashHistory.pushState(this.state, 'results');

	},

handleHomeRedirect: function(){

	    this.props.history.hashHistory.pushState(this.state, '/');

	},

handleNewListingRedirect: function(){

		var sessionID = sessionStorage.getItem('sessionID');
		var userID = parseInt(sessionStorage.getItem('userID'));
		var wrangled = this;

		if(!sessionID){

			wrangled.props.history.hashHistory.pushState(this.state, 'login')

		} else {

			//validate sessionID
			postRequests.validateSession({'userID': userID, 'sessionID': sessionID})

			.then(function(resp){
				wrangled.props.history.hashHistory.pushState(wrangled.state, 'new');
			})

			.catch(function(err){
				if(err.code === 403){
			
					wrangled.props.history.hashHistory.pushState(wrangled.state, 'login')

				} else {

					console.error('error validating session: ', err);

				}
			})
		}
	},

handleSigninRedirect: function(){

	    this.props.history.hashHistory.pushState(this.state, 'login');

	},

handleSignUpRedirect: function(){

		this.props.history.hashHistory.pushState(this.state, 'signup');

	},

handleProfileRedirect: function(){

		var sessionID = sessionStorage.getItem('sessionID');
		var userID = parseInt(sessionStorage.getItem('userID'));
		var wrangled = this;

		if(!sessionID){

			wrangled.props.history.hashHistory.pushState(this.state, 'login')
		
		} else {
			
				//validate sessionID
			postRequests.validateSession({'userID': userID, 'sessionID': sessionID})
			
			.then(function(resp){
				wrangled.props.history.hashHistory.pushState(wrangled.state, 'user');
			})

			.catch(function(err){
				if(err.code === 403){

					alert('You are not signed in! Sign up or sign in first.')
					wrangled.props.history.hashHistory.pushState(wrangled.state, 'login')

				} else {

					console.error('error validating session: ', err);

				}
			})
		}
	},

	logout: function(){

	var stringUserID = sessionStorage.getItem('userID')
	if(!stringUserID){
		alert('There is not currently anyone logged in.')
		//do something nicer than an alert window plz!
	} else{
		var userID = parseInt(stringUserID);
		var sessionID = sessionStorage.getItem('sessionID');
		var wrangledContext = this;
		postRequests.logout( {
			'userID': userID, 
			'cookie': {'sessionId': sessionID}
		})
		.then(function(resp){
			wrangledContext.redirectLogout();
		})	
	}
},


render: function() {
	    return (
	      <div className="bar">
	       <div><img className='title' onClick={this.handleHomeRedirect} src='https://i.imgur.com/pLBUGGD.png'/></div>
	        <div className="signup" onClick={this.handleSignUpRedirect}>Sign Up</div>
	         <div className="signin" onClick={this.handleSigninRedirect}>Sign In</div>
	      	  <div className="listItem" onClick={this.handleNewListingRedirect}>List an Item</div>
	      	   <div className="myProfile" onClick={this.handleProfileRedirect}>My Profile</div>
						
						<form onSubmit={this.handleSearchRedirect}>
							<input className='searchbar' placeholder='Search Items' type="text" value={this.state.searchTerm} onChange={this.handleSearch}></input>
							<input className='zipSearchbar'placeholder="ZIP Code" type="number" width='20' value={this.state.zipCode} onChange={this.handleZip}></input>
							<button className='searchSubmitButton'type="submit">GO</button>
						</form>
					
		 	    <button className='logoutButton' onClick={this.logout}>Logout</button>

	      </div>
	     );
	   }
});



module.exports = GlobalNavBar;



