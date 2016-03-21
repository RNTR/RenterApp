require('./request-helpers.js'); // Headers
require('whatwg-fetch');  // http://github.github.io/fetch/





exports.getUserInfo = function(){
  console.log("getting there")
  return "TIM"

};








exports.addNewItem = function(itemObject) {
  return fetch('items/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(itemObject)
  }).then(function(itemObject){
    console.log("ITEM OBJECT: ", itemObject)
    return itemObject
  }).then( function(response) {
      console.log('ITEM RESPONSE', response);
    })
};












/********************* ITEMS **************************/

exports.handleSubmit = function(){
  alert('post.js exports.handleSubmit')
};

exports.signupClick = function(){
  alert('post.js exports.signupClick')
};

exports.goToProfile = function(){
  
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
