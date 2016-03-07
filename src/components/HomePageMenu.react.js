/*
 * HomePageMenu
 *
 * What is displayed in the center of the homepage
 * Route: /
 *
 */

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var HomePageMenu = React.createClass ({
	render: function() {
    return (
			<div>
				<img className="home-img" src="http://hellodes.com/img/slide2.jpg" alt="" />
			</div>
		);
  }
});

module.exports = HomePageMenu;
