var react = require('react');
var reactDOM = require('react-dom');
var Router = require('react-router')
var GlobalNavBar = require('./components/GlobalNavBar')
// add dependencies for places where data is being rendered.
// for example, we will probably be using something like
// var GlobalNavBar = require('./components/GlobalNavBar.jsx')


var App = React.createClass({
  render: function() {
    return (
      <div>
        <GlobalNavBar /> // Persistent NavBar
        {this.props.children} // Populates routes
      </div>
    );
  }
})





// var navBar = React.createElement(GlobalNavBar, {
// 	signin: postRequests.signIn //(if we do it this way, we will also have to declare variables somewhere on this page requiring the page where the postRequests are made. )
// 	signup: postRequest.signUp
// })
//
//
// navBar = ReactDOM.render(navBar, document.getElementById('app'))




// We will also use ReactDOM.render here. From the tyler mcginnis tutorial -

	// ReactDOM.render takes in two arguments. The first argument is
	// the component you want to render, the second argument is the
	// DOM node where you want to render the component.

// example would be -

	// componentVariableName = ReactDOM.render(componentVariableName, document.getElementById('where-this-goes-in-DOM'))
