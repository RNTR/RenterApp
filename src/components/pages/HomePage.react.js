/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NotFound from './NotFound.react';


export default class HomePage extends Component {
	render() {
    return (
			<article>
				DIS DA HOME PAGE
				<Link to="*" className="btn btn--test">[DEV] LINK TO NOTFOUND</Link>
			</article>
		);
  }
}

