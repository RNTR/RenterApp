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
  console.log('getUserInfo was called. its not set to grab anything yet.')
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
      return response.items;
    })
};



/******************* SIGN UP/ SIGN IN ********************/





exports.signup = function(signupObject){
  console.log('signup was called with this: ', signupObject)
  return new Promise(function(resolve,reject){
    fetch('signup/', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(signupObject)
    })
    .then(function(signupObject){
      console.log('signup response: ', signupObject)
      signupObject.json()
      .then(function(jsObj){          
        if(jsObj.status === 'failed'){
            reject(jsObj)
          } else {
            sessionStorage.setItem('userID', jsObj.user.userID);
            sessionStorage.setItem('sessionID', jsObj.sessionID);
            resolve(jsObj);
          }
      })
      .catch(function(err){
        console.error('error parsing signup response: ', err);
        reject(err);
      })
    })
    .catch(function(err){
      console.error('error signing up: ', err);
      reject(err);
    })
  })
};

exports.login = function(loginObject){
  console.log('login was called with this: ', loginObject)
  return new Promise(function(resolve,reject){
    fetch('/login', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(loginObject)
    })
    .then(function(loginObject){
      console.log('returning loginObject: ', loginObject)
      loginObject.json()
        .then(function(jsDone){
          console.log('jsObj was just run: ', jsDone)
          if(jsDone.status === 'failed'){
            reject(jsDone)
          } else{
            sessionStorage.setItem('userID', jsDone.user.userID);
            sessionStorage.setItem('sessionID', jsDone.sessionID);
            resolve(jsDone);
          }
        })
        .catch(function(err){
          console.error('error parsing server response: ', err);
          reject(err);
        })
    })
    .catch(function(err){
      console.error('error logging in: ', err);
      reject(err)
    })
  })
}


exports.logout = function(userID){
  return new Promise(function(resolve,reject){
    fetch('/logout', {
        method: 'POST',
        headers: requestHeaders,
        credentials: 'include',
        body: JSON.stringify(userID)
      })
    .then(function(response){
        response.json()
        .then(function(jsObj){
          console.log('about to reset the session values.', jsObj);
          sessionStorage.removeItem('userID');
          sessionStorage.removeItem('sessionID');
          resolve(jsObj)
        })
        .catch(function(err){
          console.error('error parsing logout response: ', err);
          reject(err);
        })
      })
    .catch(function(err){
      console.error('error logging out: ', err);
      reject(err);
    })
  })
}


exports.validateSession = function (sessionObject){
  return new Promise(function(resolve,reject){
    fetch('/session', {
      method: 'POST',
      headers: requestHeaders,
      credentials: 'include',
      body: JSON.stringify(sessionObject)
    })
    .then(function(resp){
      resp.json()
      .then(function(jsObj){
        console.log('back from the server and parsed:', jsObj)
        if(jsObj.status !== 'complete'){
          reject(jsObj);
        } else{
          resolve(jsObj);
        } 
      })
      .catch(function(err){
        console.error('error parsing to json: ', err);
      })
    }) 
    .catch(function(err){
      console.error('error validating session : ', err);
      reject(err);
    })
  })
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
