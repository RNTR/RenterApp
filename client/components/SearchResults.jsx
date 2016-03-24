var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx');

var SearchResults = React.createClass({

  getInitialState: function() {

    this.handleItemName();

    return {name: "Loading...", price: null, description: ''}
  },

  handleItemName: function() {
    var promise = postRequests.searchForItem({searchTerm: sessionStorage.getItem("GlobalSearchTerm"), zipCode: parseInt(sessionStorage.getItem("GlobalSearchZip"))})
    promise.then((item) => {
      this.setState({
        name: item[0].name,
        price: item[0].price,
        description: item[0].description,
        photo: item[0].photo,
        zip: item[0].zip,
        name1: item[1].name,
        price1: item[1].price,
        description1: item[1].description,
        photo1: item[1].photo,
        zip1: item[1].zip
      })
    })
  },

  render: function() {
    return (
      <div>
        <div className="newListing">Here's what we found for: {this.state.zip}</div>
        <div className="newListing">RESULT 1
          <div className="newListing">NAME:
            <div >{this.state.name}</div>
          </div>
          <div className="newListing">PRICE:
            <div >${this.state.price}.00/Day</div>
          </div>
          <div className="newListing">DESCRIPTION:
            <div>{this.state.description}</div>
          </div>
        </div>

        <div className="newListing">RESULT 2
          <div className="newListing">NAME:
            <div >{this.state.name1}</div>
          </div>
          <div className="newListing">PRICE:
            <div >${this.state.price1}.00/Day</div>
          </div>
          <div className="newListing">DESCRIPTION:
            <div>{this.state.description1}</div>
          </div>
        </div>



      </div>
    )
  }
});

module.exports = SearchResults;
