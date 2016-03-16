require('./request-helpers.js'); // Headers
require('whatwg-fetch');  // http://github.github.io/fetch/





exports.getUserInfo = function(){

  var userInfo = {
    username: 'HYPOTHETICAL THEORETICAL FAKE NOT REAL NAME'
  }

  return userInfo;

};










/********************* ITEMS **************************/


exports.getItem = function(){

  var fakeItem = {
    itemName: 'REAL, LIVE POSSUMS',
    itemDescription: "THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, THEY ARE POSSUMS, ",
    itemPhoto: 'http://i.imgur.com/70Exu7d.jpg',
  };

  return fakeItem;

};

exports.getUserItemsForRent = function(){

  var item = "lawnmower, this data is coming from requests/post.js"
  return item;

};

exports.getStuffRentedFromOthers = function(){

   var item = "item the user is renting from someone. requests/post.js"
   return item;
};

exports.stuffBeingRentedFromUser = function(){

  var item = 'thing in requests/post.js'
  return item;
};

exports.searchResults = function() {
  var results = {
    result: "Lawnmower"
  }
  return results;
}
