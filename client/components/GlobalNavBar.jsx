var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');



var GlobalNavBar = React.createClass({

getInitialState: function(){
	return {};
},


login: function(){},

logout: function(){},

searchbar: function(){},

myProfile: function(){}, // link to user profile

titleHome: function(){},  // link back to the home page

 render: function() {
    return (
      <div className="bar">
       <div className='title' /*onClick={this.props.goHome}*/>RNTR</div>
        <div className="signup" onClick={this.props.signupClick}>Sign Up/Sign In</div>
      	 <div className="listItem" onClick={this.props.addNewItem}>List an Item</div>
      	  <div className="myProfile" onClick={this.props.goToProfile}>My Profile</div>
      	   <input className='searchbar' placeholder='Search Items' on={this.props.handleSubmit}></input>

      </div>


    );
  }


});



module.exports = GlobalNavBar;
