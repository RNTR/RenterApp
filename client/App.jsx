var React = require('react');
var ReactDOM = require('react-dom');
var GlobalNavBar = require('./components/GlobalNavBar.jsx')
var HomePage = require('./components/HomePage.jsx')



var NavBar = React.createElement(GlobalNavBar, {

});

var Home = React.createElement(HomePage, {
  navbar: GlobalNavBar.render
});


NavBar = ReactDOM.render(NavBar, document.getElementById('globalnavbar'))

Home = ReactDOM.render(Home, document.getElementById('app'))


// We will also use ReactDOM.render here. From the tyler mcginnis tutorial -

	// ReactDOM.render takes in two arguments. The first argument is
	// the component you want to render, the second argument is the
	// DOM node where you want to render the component.

// example would be -

	// componentVariableName = ReactDOM.render(componentVariableName, document.getElementById('where-this-goes-in-DOM'))

	
