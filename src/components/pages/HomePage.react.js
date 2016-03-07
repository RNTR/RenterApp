/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

var React = require('react');
var Router = require('react-router');
var HomePageMenu = require('../HomePageMenu.react');

var Link = Router.Link;

var style = {
	backgroundImage: "url('http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/08/Dark-Leaf-Blue-Water-Drops-HD-Wallpapers.jpg')"
};
var HomePage = React.createClass ({
	render: function() {
    return (
    	<header className="intro-header" style={style}>
    	    <div className="container">
    	        <div className="row">
    	            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
    	                <div className="site-heading">
    	                    <h1>RNTR's App</h1>
    	                    <hr className="small" />
    	                    <span className="subheading">Rent this... Rent that... Rent everything that lasts.</span>
    	                    <button className="btn btn-intro btn-started">Get Started</button>
    	                    <button className="btn btn-intro btn-about">About</button>
    	                </div>
    	            </div>
    	        </div>
    	    </div>
    	</header>
		);
  }
});

module.exports = HomePage;
