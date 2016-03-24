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
	var wrangled = this;
	postRequests.signup(this.state)
	.then(function(resp){
		wrangled.redirect()
	})
},

redirect: function(){
	this.props.history.pushState(null, 'user');
},

render: function(){
	return (

		<div>

		<form className = 'signup' onSubmit={this.submit}>
		<input className='userSignup' value={this.state.username} onChange={this.handleUsernameChange} placeholder='Username'/>
		<input className='emailSignup' value={this.state.email} onChange={this.handleEmailChange} placeholder='email'/>
		 <input className='userPassword' value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder='Password' />
		 <button className="signupButton" type="submit">LOGIN</button>
		 </form>

		</div>


)}

});



module.exports = Signup;
