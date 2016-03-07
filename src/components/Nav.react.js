/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;
// TODO, CREATE A NAV BAR

var Nav = React.createClass ({
  render: function() {
    return(
      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">RNTR</h1></Link>
          <div className="nav-btn">
          	<ul>
	          	<li>Home</li>
	          	<li>Register</li>
	          	<li>Login</li>
          	</ul>
          	<i className="fa fa-search"></i>
					</div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
