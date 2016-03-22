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
var css = require("../client/public/css/styles.css")





window.globalStateItemID = null;



/***********************************************************/




var NavBar = React.createElement(GlobalNavBar, {

	listItem: postRequests.listItem,

	goToProfile: postRequests.goToProfile,

	signupClick: postRequests.signupClick,

	goHome: getRequests.goHome,

	handleSubmit: postRequests.handleSubmit

});



// var NewListing = React.createElement(MakeNewListing, {

// });

// var Item = React.createElement(ItemPage, {
//     getItem: postRequests.getItem
// });

// var Results = React.createElement(SearchResults, {
//   searchResults: postRequests.searchResults,
//   searchLocation: postRequests.searchLocation
// })


/***********************************************************/




/***********************************************************/




NavBar = ReactDOM.render(NavBar, document.getElementById('globalnavbar'));




/***********************************************************/


// class App extends React.Component{
//
//
//     render() {
//         return (
//             <div>
//                 {this.props.children}
//             </div>
//         )
//     }
// }
//
// export default App;
