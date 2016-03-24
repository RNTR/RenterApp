var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx'); 


var Login = React.createClass({

getInitialState: function(){
	
	return {
		username: null,
		password: null
	}

},

handleUsernameChange: function(e) {
    this.setState({
      username: e.target.value
    });
  },

handlePasswordChange: function(e) {
    this.setState({
      password: e.target.value
    });
  },

logout: function(){

	var stringUserID = sessionStorage.getItem('userID')
	if(!stringUserID){
		alert('There is not currently anyone logged in.')
		//do something else for this case?
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

submit: function(){

	var wrangled = this;
	postRequests.login(this.state)
	.then(function(resp){
		console.log('about to redirect in submit behavior: ', resp);
		wrangled.redirect();		
	})
},

redirect: function(){
	this.props.history.pushState(null, 'user');
},

redirectLogout: function(){
	this.props.history.pushState(null, '/');
},

render: function(){
	return (<div>

		<form className = 'userName' onSubmit={this.submit}>
		<input className='userInput' value = {this.state.username} onChange={this.handleUsernameChange} placeholder='Username'/>
		 <input className='userPass' value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder='Password' />
		 <button className="loginButton" type="submit">LOGIN</button>
		 </form>

		 <button className='logoutButton' onClick={this.logout}>LOGOUT</button>

		</div>

		




		)
}

})



module.exports = Login;
