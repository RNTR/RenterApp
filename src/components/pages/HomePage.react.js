/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var HomePage = React.createClass ({
	render: function() {
    return (
			<article>
				DIS DA HOME PAGE
				<Link to="*" className="btn btn--test">[DEV] LINK TO NOTFOUND</Link>
			</article>
		);
  }
});

module.exports = HomePage;
