var React = require('react');
var ReactDOM = require('react-dom');
// add additional dependencies

var UserPage = React.createClass({

navBar: function(){}, //load globalNavBar;

getInitialState: function(){
	return {
		username: {} // this might need to refer to window.globalStateUserId to see what user is currently logged in. will need to check on this.
	};
},

render: function(){
	return (/*DIV NAME HERE*/);
}

});



module.exports = UserPage;