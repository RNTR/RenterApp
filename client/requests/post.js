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



exports.getUserInfo = function(){
  console.log("getting there")
  return "TIM"

};








exports.addNewItem = function(itemObject) {
  console.log("ITEM OBJECT: ", itemObject);
  return fetch('items/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(itemObject)
  }).then(function(itemObject){
    return itemObject.json();
  }).then( function(response) {
      console.log('ITEM RESPONSE', response);
      return response;
    })
};



/******************* SEARCH ********************/




exports.searchForItem = function(itemName) {
  console.log("ITEMNAME: ", itemName)
  return fetch('items/search', {            //change this
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(itemName)
  }).then(function(response){
    return response.json()
  })
  .then( function(response) {
      console.log('ITEMNAME RESPONSE', response);
    })
};



/******************* SIGN UP/ SIGN IN ********************/





exports.signup = function(signupObject){
  console.log("SIGNUP OBJECT: ", signupObject);
  return fetch('signup/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(signupObject)
  }).then(function(signupObject){
    return signupObject.json();
  }).then( function(response) {
      console.log('SIGNUP RESPONSE', response);
      return response;
    })
};

exports.login = function(loginObject){
  console.log("LOGIN OBJECT: ", loginObject);
  return fetch('login/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(loginObject)
  }).then(function(loginObject){
    return loginObject.json();
  }).then( function(response) {
      console.log('login RESPONSE: ', response);
      console.log('login RESPONSE ID: ', response.user.userID);
      window.globalStateUserID = response.user.userID;
      return response;
    })
}


exports.logout = function(){
  return window.globalStateUserID = null;
}





/*********global nav bar***********/



exports.goToProfile = function(userID){
    return fetch('users/', {            //change this maybe
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userID)
  }).then( function(response) {
      console.log('USERID', response);
    })

}





/********************* ITEMS **************************/


exports.getItem = function(itemID){
    console.log('itemID ', itemID)
    return fetch('items/id', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(itemObject)
  }).then(function(itemObject){
    return itemObject.json();
  }).then( function(response) {
      console.log('ITEM RESPONSE', response);
      return response;
    })
  
};



exports.handleSubmit = function(){
  alert('post.js exports.handleSubmit')
};



exports.goToProfile = function(){

}

exports.listItem = function(){
  alert('post.js exports.listItem')
}



exports.getUserItemsForRent = function(){

  var item = ["Lawnmower"]
  return item;

};

exports.getStuffRentedFromOthers = function(){

   var item = "A cat"
   return item;
};

exports.stuffBeingRentedFromUser = function(){

  var item = 'A Possum'
  return item;
};

/************ SEARCH RESULTS **********/

exports.searchResults = function() {
  var results = {
    item: ["Lawnmower", "Leaf Blower", "PS4", "TV"],
    imageUrl: ["https://upload.wikimedia.org/wikipedia/commons/f/f4/John_Deere_lawn_mower.JPG", "https://upload.wikimedia.org/wikipedia/commons/f/fd/LeafBlowerVac.jpg", "http://nairatinz.com/oc-content/uploads/57/5533.jpg", "https://s3-us-west-2.amazonaws.com/usedphotosna/42866757_614.jpg"],
    price: [15, 22, 13, 55]
  }

  var results2 = {
    item:["Hat", "Pin", "Toy", "XBoxGame"],
    imageUrl: ["http://madogre.com/wp-content/uploads/2014/05/military_hat_box-300x201.jpg", "https://img0.etsystatic.com/058/0/9577287/il_fullxfull.751500266_olvs.jpg", "https://s.yimg.com/ny/api/res/1.2/BjxX4T6e2onXXzp.jD35ww--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://l.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w867/78e579fd6f495206dbbd67f22b853d6a5f690734.jpg", "http://www.visiontimes.com/uploads/2015/02/x-game.jpg"],
    price: [15, 22, 13, 55]

  }
  return results2;
};

exports.searchLocation = function() {
  var location = {
    city: ["San Francisco", "Dallas", "Los Angeles", "New York", "Pyongyang"]
  }
  return location;
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
  alert('postRequests.submitNewListing');
}
