/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

// TODO, CREATE A NAV BAR

class Nav extends Component {
  render() {
    return(
      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">RNTR</h1></Link>
        </div>
      </div>
    );
  }
}

export default Nav;
