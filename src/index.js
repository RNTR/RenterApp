import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import FontFaceObserver from 'fontfaceobserver';

// Import pages for routing
import HomePage from './components/pages/HomePage.react';
import NotFound from './components/pages/NotFound.react';
import App from './components/App.react';

ReactDOM.render(
	  <div>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </div>, 
	document.getElementById('app')
);
