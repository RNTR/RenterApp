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

    return {results: null, zip: null}
  },

  handleItemName: function() {
    var promise = postRequests.searchForItem({searchTerm: sessionStorage.getItem("GlobalSearchTerm"), zipCode: parseInt(sessionStorage.getItem("GlobalSearchZip"))})
    promise.then((item) => {

      if (item.length === 0){
        this.setState({
          results: 'not found',
          zip: null
        })
      } else{
        this.setState({
          results : item,
          zip: item[0].zip
        })
      }
    })
  },

  render: function() {
    var results = this.state.results;
    var zip = this.state.zip;

    if (results !== null && results !== 'not found'){
      return (
        <div>
        <div className="newListing">Here is what we found for: {this.state.zip}</div>
        <div>
            {results.map(function(item,index){
              return  <div className="newListing">RESULT {index+1}
                      <div className="newListing">NAME:
                        <div >{item.name}</div>
                      </div>
                      <div className="newListing">PRICE:
                        <div >${item.price}.00/Day</div>
                      </div>
                      <div className="newListing">DESCRIPTION:
                        <div>{item.description}</div>
                      </div>
                      <div className="newListing">PIC:
                        <a href={item.photo} >Link</a>
                      </div>
                    </div>
            })}
      </div>
      </div>
    )
  } else if(results === 'not found'){
    return <div className="newListing">NO RESULTS FOUND </div>;
  } else {
    return <div className="newListing">LOADING...</div>;
  }
  }
});

module.exports = SearchResults;
