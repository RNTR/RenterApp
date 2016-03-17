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
var SearchResults = require('./components/SearchResults.jsx');



/***********************************************************/


var NavBar = React.createElement(GlobalNavBar, {

	listItem: postRequests.listItem,

	goToProfile: postRequests.goToProfile,

	signupClick: postRequests.signupClick,

	goHome: getRequests.goHome,

	handleSubmit: postRequests.handleSubmit

});

var Home = React.createElement(HomePage, {

});

var User = React.createElement(UserPage, {

    getUserInfo: postRequests.getUserInfo,

    getUserItemsForRent: postRequests.getUserItemsForRent,

    getStuffRentedFromOthers:postRequests.getStuffRentedFromOthers,

    stuffBeingRentedFromUser:postRequests.stuffBeingRentedFromUser

});

var NewListing = React.createElement(MakeNewListing, {

});

var Item = React.createElement(ItemPage, {
    getItem: postRequests.getItem
});

var Results = React.createElement(SearchResults, {
  searchResults: postRequests.searchResults,
	searchLocation: postRequests.searchLocation
})


/***********************************************************/




/***********************************************************/


NavBar = ReactDOM.render(NavBar, document.getElementById('globalnavbar'));

// Home = ReactDOM.render(Home, document.getElementById('home'));

// NewListing = ReactDOM.render(NewListing, document.getElementById('newlisting'))

// User = ReactDOM.render(User, document.getElementById('user'));

// Item = ReactDOM.render(Item, document.getElementById('item'));

Results = ReactDOM.render(Results, document.getElementById('results'))

/***********************************************************/


class App extends React.Component{
    render() {
        return (
            <div>
                <GlobalNavBar />
            </div>    
        )
    }
}

export default App;
