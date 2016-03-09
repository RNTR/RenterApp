var React = require('react');
var ReactDOM = require('react-dom');
// add additional dependencies

var UserPage = React.createClass({

getInitialState: function(){
	return {
		username: {} // this might need to refer to window.globalStateUserId to see what user is currently logged in. will need to check on this.
	};
},

navBar: function(){}, //load globalNavBar

requestsToRentees: function(){},

requestsFromRenters: function(){},

delistItem: function(){},

getListedItems: function(){},

getCurrentRentedItems: function(){},

render: function(){
	return (/*DIV NAME HERE*/);
}

});



module.exports = UserPage;