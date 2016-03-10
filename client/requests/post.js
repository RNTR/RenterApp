require('./request-helpers.js'); // Headers
require('whatwg-fetch');  // http://github.github.io/fetch/

exports.signup = function(info) {
  return fetch('signup', {
    method: 'POST',
    headers: requestHeaders,   // requestHeaders located in /request-helpers.js
    body: JSON.stringify(info)
  })
  .then(function(response) {
    console.log('response in post.js', response)
    return response.json();  
  })
  .then(function(data) {
    if(data.error) {
      location.reload();
    }
    window.globalStateUserId = data.id;             //these are located in App.js
    window.globalToken = data.token;
    window.globalStateUserName = data.username;
  })
  .catch(function(error) {
    if( error) {
      console.log("ERROR:", error)
    }
  })
};

exports.signin = function(){};

exports.listNewItem = function(){};

exports.requestRental = function(){};