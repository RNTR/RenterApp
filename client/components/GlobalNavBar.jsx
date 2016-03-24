var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
import {render} from 'react-dom'
var HomePage = require('../components/HomePage.jsx')
var App = require('../App.jsx');
import { hashHistory } from 'react-router';
import { RouterContext, match } from 'react-router';
import { History } from 'react-router';
// var history = require('react-router/lib/BrowserHistory').history;


var GlobalNavBar = React.createClass({

getInitialState: function(){
	return {
		searchTerm: null,
		zipCode: null
	};
},
handleSearch: function(e){
	this.setState({
		searchTerm: e.target.value
	})
},
handleZip: function(e){
	this.setState({
		zipCode: parseInt(e.target.value)
	})
},
// submitSearch: function(){
// 	postRequests.searchForItem(this.state)
// },

handleSearchRedirect: function(){
	sessionStorage.setItem("GlobalSearchTerm", this.state.searchTerm)
	sessionStorage.setItem("GlobalSearchZip", this.state.zipCode)
	console.log('this.props: ', this.props)
    this.props.history.hashHistory.pushState(this.state, 'results');
},

handleHomeRedirect: function(){
	console.log('this.props: ', this.props)
    this.props.history.hashHistory.pushState(this.state, '/');
},

handleNewListingRedirect: function(){


    this.props.history.hashHistory.pushState(this.state, 'new');
},

handleSigninRedirect: function(){


    this.props.history.hashHistory.pushState(this.state, 'login');

},

handleProfileRedirect: function(){

    this.props.history.hashHistory.pushState(this.state, 'user');
},



 render: function() {
    return (
      <div className="bar">
       <div className='title' onClick={this.handleHomeRedirect}>RNTR</div>
        <div className="signup" onClick={this.handleSigninRedirect}>Sign Up/Sign In</div>
      	 <div className="listItem" onClick={this.handleNewListingRedirect}>List an Item</div>
      	  <div className="myProfile" onClick={this.handleProfileRedirect}>My Profile</div>
					<form onSubmit={this.handleSearchRedirect}>
						<input className='searchbar' placeholder='Search Items' type="text" value={this.state.searchTerm} onChange={this.handleSearch}></input>
						<input className='zipSearchbar'placeholder="ZIP" type="number" width='20' value={this.state.zipCode} onChange={this.handleZip}></input>
						<button className='searchSubmitButton'type="submit">GO</button>
					</form>







      </div>

    );
  }


});



module.exports = GlobalNavBar;
