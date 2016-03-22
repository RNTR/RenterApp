var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
import {render} from 'react-dom'


var GlobalNavBar = React.createClass({

getInitialState: function(){
	return {
		search: '',
		zip: ''
	};
},
handleSearch: function(e){
	this.setState({
		search: e.target.value
	});
},
handleZip: function(e){
	this.setState({
		zip: parseInt(e.target.value)
	})
},
submitSearch: function(){
	
}


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
					<form onSubmit={this.submitSearch}>
						<input className='searchbar' placeholder='Search Items' type="text" value={this.state.search} onChange={this.handleSearch}></input>
						<input placeholder="Zip Code" type="number" value={this.state.zip} onChange={this.handleZip}></input>
						<button type="submit">GO</button>
					</form>

      </div>


    );
  }


});



module.exports = GlobalNavBar;
