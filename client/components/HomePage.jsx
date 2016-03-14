var react = require('react');
var Router = require('react-router');
// var Home = require('./components/Home')
var Link = Router.Link
import React from 'react'
var style = {
  backgroundImage: "url('http://www.staywallpaper.com/wp-content/uploads/2016/01/hd-wallpapers-STAY030.jpg')"
}



var HomePage = React.createClass({
  getInitialState: function() {

 return {}

  },


  render: function() {
    return (
      <div className="HomePageGreeting">Welcome to RNTR!</div>
    );
  }
})

module.exports = HomePage;
