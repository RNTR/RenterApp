require('./request-helpers.js'); // Headers
require('whatwg-fetch');  // http://github.github.io/fetch/





exports.getUserInfo = function(){


  console.log("getting there")
  return "TIM"

};










/********************* ITEMS **************************/

exports.handleSubmit = function(){
  alert('post.js exports.handleSubmit')
};

exports.signupClick = function(){
  alert('post.js exports.signupClick')
};

exports.goToProfile = function(){
  alert('post.js exports.goToProfile')
}

exports.listItem = function(){
  alert('post.js exports.listItem')
}

exports.getItem = function(){

  var fakeItem = {
    itemName: 'Lawnmower',
    itemDescription: "It's red and it mows lawns",
    itemPhoto: 'https://www.nextnature.net/app/uploads/2008/07/lawn-mower_530.jpg',
  };

  return fakeItem;

};

exports.getUserItemsForRent = function(){

  var item = "Rabbits"
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
    item:["Hat", "Leaf Blower", "PS4", "TV"],
    imageUrl: ["http://madogre.com/wp-content/uploads/2014/05/military_hat_box-300x201.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/fd/LeafBlowerVac.jpg", "http://nairatinz.com/oc-content/uploads/57/5533.jpg", "https://s3-us-west-2.amazonaws.com/usedphotosna/42866757_614.jpg"],
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
