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
 			<div>{this.props.children}</div>
 		);
   }
 });

 module.exports = HomePage;
