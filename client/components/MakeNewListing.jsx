var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
// add additional dependencies

var MakeNewListing = React.createClass({

listItem: function(){},  // post.js has a listNewItem function

// there should be input fields for item description, price, name, available dates, photo, and location.

render: function(){
	return ( <div>MAKE NEW LISTING!!!!!!</div>  )
}

})



module.exports = MakeNewListing;
