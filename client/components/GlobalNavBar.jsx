var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
// add additional dependencies

var GlobalNavBar = React.createClass({

getInitialState: function(){
	return {};
},

signup: function(){},

login: function(){},

logout: function(){},

searchbar: function(){},

listItem: function(){},  // post.js has a listNewItem function

myProfile: function(){}, // link to user profile

titleHome: function(){},  // link back to the home page

render: function(){
	return (<div>HELLO</div>);
}

});



module.exports = GlobalNavBar;
