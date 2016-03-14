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

 render: function() {
    return (
      <div className="bar">
      	<div className='title'>RNTR</div>
      	<div className="signup">Sign Up/Sign In</div>
      	<div className="listItem">List an Item</div>
      	<div className="myProfile">My Profile</div>
      	<input className='searchbar' placeholder='Search Items'></input>

      </div>


    );
  }


});



module.exports = GlobalNavBar;
