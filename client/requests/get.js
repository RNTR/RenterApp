require('./request-helpers.js'); // Headers
var React = require('react');
var Link = Router.Link;
import { Component } from 'react';
import { Route } from 'react-router';
import { Router, RouterContext, match } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { render } from 'react-dom'

function getItems(){};

// getItems should return item description, price, name, available dates, photo, and location.

function getRentedItems(){}

// not sure whether we will need getRentedItems. 
// its purpose is to get only a user's currently checked out items.


function getMyListedItems(){};

exports.goHome = function(){
	alert('get.js exports.goHome')
}



