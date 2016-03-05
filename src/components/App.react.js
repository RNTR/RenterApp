/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
import React, { Component } from 'react';
import Nav from './Nav.react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Nav history={this.props.history} location={this.props.location} />
        { this.props.children }
      </div>
    )
  }
}

export default App;
