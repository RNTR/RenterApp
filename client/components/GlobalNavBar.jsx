var React = require('react');
var ReactDOM = require('react-dom');
// add additional dependencies

var GlobalNavBar = React.createClass({

getInitialState: function(){
	console.log("GLOBAL NAV BAR")
	alert('global nav bar')
},

signup: function(){},

login: function(){},

logout: function(){},

searchbar: function(){},  

listItem: function(){},  // post.js has a listNewItem function

myProfile: function(){}, // link to user profile

titleHome: function(){},  // link back to the home page

render: function(){
	return ( alert('thing') );
}

});



module.exports = GlobalNavBar;