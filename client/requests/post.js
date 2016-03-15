require('./request-helpers.js'); // Headers
require('whatwg-fetch');  // http://github.github.io/fetch/

exports.getUserInfo = function(){
  
  var userInfo = {
    username: 'HYPOTHETICAL THEORETICAL FAKE NOT REAL NAME'
  }

  return userInfo;

};

exports.getItem = function(){

  var fakeItem = {
    itemName: 'REAL, LIVE POSSUMS',
    itemDescription: "THEY ARE POSSUMS",
    itemPhoto: 'http://i.imgur.com/70Exu7d.jpg'
  };

  return fakeItem;

};

exports.listNewItem = function(){};

exports.requestRental = function(){};