var React = require('react');
var ReactDOM = require('react-dom');
var GlobalNavBar = require('./components/GlobalNavBar.jsx');
var HomePage = require('./components/HomePage.jsx');
var UserPage = require('./components/UserPage.jsx');
var MakeNewListing = require('./components/MakeNewListing.jsx');
var ItemPage = require('./components/ItemPage.jsx');
var postRequests = require('./requests/post.js');
var getRequests = require('./requests/get.js');
var deleteRequests = require('./requests/delete.js');








/***********************************************************/


var NavBar = React.createElement(GlobalNavBar, {

});

var Home = React.createElement(HomePage, {
  // navbar: GlobalNavBar.render
});

var User = React.createElement(UserPage, {
    getUser: postRequests.getUserInfo
});

var NewListing = React.createElement(MakeNewListing, {
  // navBar: GlobalNavBar.render
});

var Item = React.createElement(ItemPage, {
    getItem: postRequests.getItem
});


/***********************************************************/








/***********************************************************/


NavBar = ReactDOM.render(NavBar, document.getElementById('globalnavbar'));

// Home = ReactDOM.render(Home, document.getElementById('app'));

NewListing = ReactDOM.render(NewListing, document.getElementById('newlisting'))

// User = ReactDOM.render(User, document.getElementById('user'));

Item = ReactDOM.render(Item, document.getElementById('item'));

/***********************************************************/
