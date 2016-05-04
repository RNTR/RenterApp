var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
import { Link } from 'react-router'
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');


var HomePage = React.createClass({

 getInitialState: function() {

  return {};

  },


  render: function() {
    return (
      <div className="HomePageMain">
        <div className='HomePageGreeting'>
          <div className='animated bounce'>
            <a target="_blank" 
              href="http://bit.ly/1RCeXpx">
              <img src='http://i.imgur.com/33Pytdj.png' />
            </a>
          </div>
         </div>

         <div className='HomePageDescription'>
            
            RNTR allows you to rent tools, household items, sports equipment, or nearly anything else from your neighbors. 
            
         </div>
         
       

    </div>

    );
  }
})

module.exports = HomePage;


     
// // http://i.imgur.com/tH2N46J.png
//  <div className="github"><a target="_blank" href="http://bit.ly/1RCeXpx">Visit our Github</a></div>