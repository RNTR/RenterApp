var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes.jsx');
var Link = Router.Link;
import { Router, Route, hashHistory } from 'react-router';


// ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));


ReactDOM.render(routes, document.getElementById('app'));




