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


submit: function(){

	var sessionID = sessionStorage.getItem('sessionID')
	if(sessionID){
		document.getElementById('signinModal').style.display='block';
	    setTimeout(function(){document.getElementById('signingModal').remove()}, 5000);
	} else {
		var wrangled = this;
		postRequests.login(this.state)
		.then(function(resp){
			console.log('about to redirect in submit behavior: ', resp);
			wrangled.redirect();		
		})	
		.catch(function(err){
			if (err.message === 'invalid password'){
				document.getElementById('err1Modal').style.display='block'; 
	    		setTimeout(function(){document.getElementById('err1Modal').remove()}, 5000);
			} else if (err.message === 'user not found.'){
				document.getElementById('err2Modal').style.display='block'; 
	    		setTimeout(function(){document.getElementById('err2Modal').remove()}, 5000);
			} else if (err.message === 'Invald format. Make sure you sent in a valid username and password.'){
				document.getElementById('err3Modal').style.display='block'; 
	    		setTimeout(function(){document.getElementById('err3Modal').remove()}, 5000);
			} else{
				console.error('error signing up: ', err);
			}
		})
	}
},

redirect: function(){
	this.props.history.pushState(null, 'user');
},




render: function(){
	return (<div>

		<form className = 'userName' onSubmit={this.submit}>
		<input className='loginUserInput' value = {this.state.username} onChange={this.handleUsernameChange} placeholder='Username'/>
		 <input className='loginPassInput' value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder='Password' />
		 <input type='button' className="loginButton" onClick={this.submit} value='Sign In'></input>
		 </form>

		 <div id='signinModal'>Someone is already logged in! Log out first.</div>
		 <div id='err1Modal'>Invalid password</div>
		 <div id='err2Modal'>User not found</div>
		 <div id='err3Modal'>Please enter a valid username and password</div>
		
		</div>

		




		)
}

})



module.exports = Login;
