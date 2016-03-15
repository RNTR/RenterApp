var react = require('react');
var Router = require('react-router');
import React from 'react'
import { Link } from 'react-router'
var style = {
  backgroundImage: "url('http://www.staywallpaper.com/wp-content/uploads/2016/01/hd-wallpapers-STAY030.jpg')"
}



var HomePage = React.createClass({
  getInitialState: function() {

 return {}

  },


  render: function() {
    return (
      <div className="HomePageMain">
      	<div className="HomePageGreeting">Welcome to RNTR!</div>
      </div>
      
    );
  }
})

module.exports = HomePage;
