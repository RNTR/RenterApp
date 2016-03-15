var React = require('react');
var ReactDOM = require('react-dom');
var GlobalNavBar = require('./components/GlobalNavBar.jsx');
var HomePage = require('./components/HomePage.jsx');
var UserPage = require('./components/UserPage.jsx');
var MakeNewListing = require('./components/MakeNewListing.jsx');

/***********************************************************/


var NavBar = React.createElement(GlobalNavBar, {

});

var Home = React.createElement(HomePage, {
  // navbar: GlobalNavBar.render
});

var User = React.createElement(UserPage, {
  // navBar: GlobalNavBar.render
});

var NewListing = React.createElement(MakeNewListing, {
  // navBar: GlobalNavBar.render
});

/***********************************************************/








/***********************************************************/


NavBar = ReactDOM.render(NavBar, document.getElementById('globalnavbar'));

// Home = ReactDOM.render(Home, document.getElementById('app'));

User = ReactDOM.render(User, document.getElementById('user'))

// NewListing = ReactDOM.render(NewListing, document.getElementById('newlisting'))


/***********************************************************/




