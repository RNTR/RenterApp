require('./request-helpers.js'); // Headers
require('whatwg-fetch');  // http://github.github.io/fetch/
var getRequests = require('./get.js');
require('./request-helpers.js'); // Headers
var React = require('react');
var Link = Router.Link;
import { Component } from 'react';
import { Route } from 'react-router';
import { Router, RouterContext, match } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { render } from 'react-dom'
var App = require('../App.jsx')


exports.getUserInfo = function(){
  console.log('USER REQUEST')
}

exports.addNewItem = function(itemObject) {
  return new Promise(function(resolve, reject){
    fetch('items/', {
      method: 'POST',
      headers: requestHeaders,
      credentials: 'include',
      body: JSON.stringify(itemObject)
    }).then(function(itemObject){
        var newObj; 
        itemObject.json()
          .then(function(Justin){
            newObj = Justin; 
            // window.globalStateItemID = newObj.id;
            resolve(Justin);
          })
      })
  })
};



/******************* SEARCH ********************/




exports.searchForItem = function(itemName) {
  return fetch('items/search', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(itemName)
  }).then(function(itemName){
    return itemName.json()
  })
  .then( function(response) {
      return response.items[0];
    })
};



/******************* SIGN UP/ SIGN IN ********************/





exports.signup = function(signupObject){
  return fetch('signup/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(signupObject)
  }).then(function(signupObject){
    return signupObject.json();
  }).then( function(response) {
      window.globalStateUserID = response.user.userID;
      window.globalStateSessionID = response.sessionID;
      return response;
    })
};

exports.login = function(loginObject){
  return fetch('login/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(loginObject)
  }).then(function(loginObject){
    return loginObject.json();
  }).then( function(response) {
      window.globalStateUserID = response.user.userID;
      window.globalStateSessionID = response.sessionID;
      return response;
    })

}


exports.logout = function(userID){
  return fetch('logout/', {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify(userID)
  }).then(function(userID){
    return userID.json();
  }).then( function(response) {
      window.globalStateUserID = null;
      return response;
    })


  window.globalStateUserID = null;
  window.globalStateSessionID = null;
  return;
}





/*********global nav bar***********/



exports.goToProfile = function(userID){
    return fetch('users/', {            //change this maybe
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify(userID)
  }).then( function(response) {
    })

}





/********************* ITEMS **************************/


exports.getItem = function(itemID){

  return fetch('items/id', {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify(itemID)
  })
    .then(function(itemID){
      return itemID.json();
    })
    .then(function(response) {
        return response.item;
    })
};


exports.getItemRedirect = function(itemID){

  return fetch('items/', {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify(itemID)
  })
    .then(function(itemID){
      return itemID.json();
    })
    .then(function(response) {
        return response.item;
    })
};


exports.handleSubmit = function(){

};


exports.goToProfile = function(){

}

exports.listItem = function(){

}


exports.getUserItemsForRent = function(){


};

exports.getStuffRentedFromOthers = function(){


};

exports.stuffBeingRentedFromUser = function(){


};

/************ SEARCH RESULTS **********/

exports.searchResults = function() {

};

exports.searchLocation = function() {

}

/************ NEW LISTING **********/

exports.itemName = function() {

}

exports.itemDescription = function() {

}

exports.photoURL = function() {

}

exports.firstDate = function() {

}

exports.lastDate = function() {

}

exports.price = function() {

}

exports.newListLocation = function() {

}

exports.submitNewListing = function() {

}


  
