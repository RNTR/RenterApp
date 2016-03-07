/*
 * ResultsPage
 *
 * This displays search results.
 * Route: /results
 *
 */

 var React = require('react');
 var Router = require('react-router');

 var Link = Router.Link;

 var ResultsPage = React.createClass ({
 	render: function() {
     return (
 			<ul>{this.props.children}</ul>
 		);
   }
 });

 module.exports = HomePage;
