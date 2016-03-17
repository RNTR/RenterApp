var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
// var Link = Router.Link; 
import { Link } from 'react-router'


// var style = {
//   backgroundImage: "url('http://www.staywallpaper.com/wp-content/uploads/2016/01/hd-wallpapers-STAY030.jpg')"
// }

// <Link to='/app'>HOMEPAGE<Link>

var HomePage = React.createClass({
  
 getInitialState: function() {

  return {};

  },


  render: function() {
    return (
      <div className="HomePageMain">
        <div className='HomePageGreeting'>
          Welcome to RNTR!
        </div>
      </div>
    );
  }
})

module.exports = HomePage;


