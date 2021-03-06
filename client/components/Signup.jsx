var React = require('react');
var Link = Router.Link;
import { Component } from 'react';
import { Route } from 'react-router';
import { Router, RouterContext, match } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { render } from 'react-dom'
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') 


var Signup = React.createClass({


getInitialState: function(){
	return {
	username: null,
	email: null,
	password: null
	}
},

handleUsernameChange: function(e) {
    this.setState({
      username: e.target.value
    });
  },

handleEmailChange: function(e) {
	this.setState({
  		email: e.target.value
	});
},

handlePasswordChange: function(e) {
    this.setState({
      	password: e.target.value
    });
},

submit: function(){
	var sessionID = sessionStorage.getItem('sessionID')
	if(sessionID){
		document.getElementById('alreadyLoggedInModal').style.display='block'; 
	    setTimeout(function(){document.getElementById('alreadyLoggedInModal').remove()}, 5000);
	} else {
		var wrangled = this;
		postRequests.signup(this.state)
		.then(function(resp){
			console.log('this came back for signup: ', resp)
			wrangled.redirect()
		})
		.catch(function(err){
			console.log('this was the signup Error: ',err)
			if (err.message === 'invalid password'){
				document.getElementById('err1Modal').style.display='block'; 
	    		setTimeout(function(){document.getElementById('err1Modal').remove()}, 5000);
			} else if (err.message === 'That username is taken.'){
				document.getElementById('usernameTakenModal').style.display='block'; 
	    		setTimeout(function(){document.getElementById('usernameTakenModal').remove()}, 5000);
			} else if (err.message === 'incorrect format. Make sure you provided a valid username, password, and email.'){
				document.getElementById('validSignupModal').style.display='block'; 
	    		setTimeout(function(){document.getElementById('validSignupModal').remove()}, 5000);
			} else {
				console.error('error signing up: ', err);
			}
		})
	}
},

redirect: function(){
	this.props.history.pushState(null, 'user');
},

render: function(){
	return (

		<div className='signupContainer'>

		<form className = 'signup'>
		<input className='userSignup' value={this.state.username} onChange={this.handleUsernameChange} placeholder='Username'/>
		<input className='emailSignup' value={this.state.email} onChange={this.handleEmailChange} placeholder='E-mail'/>
		 <input className='userPassword' value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder='Password' />
		 <input type='button' className="signupButton" onClick={this.submit} value='Sign Up'></input>
		 </form>
         
       <div id='alreadyLoggedInModal'>Someone is already logged in! Please log out first.</div>
       <div id='err1Modal'>Invalid password</div>
       <div id='usernameTakenModal'>This username is already taken</div>
       <div id='validSignupModal'>Please enter a valid username, email, and password</div>
		</div>


)}

});



module.exports = Signup;
