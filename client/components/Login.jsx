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

		<div className = 'userName'>
		<input className='userInput' placeholder='Username'/>
		 <input className='userPass' placeholder='Password' />
		 </div>

		</div>)
}

})



module.exports = Login;
