var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');


var Login = React.createClass({

login: function(){



},

render: function(){
	return (<div>

		<form className = 'userName'>
		<input className='userInput' placeholder='Username'/>
		 <input className='userPass' type='password' placeholder='Password' />
		 <button className="loginButton" type="submit">LOGIN</button>
		 </form>

		</div>)
}

})



module.exports = Login;
