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
    var promise = postRequests.searchForItem(
      {searchTerm: sessionStorage.getItem("GlobalSearchTerm"),
      zipCode: parseInt(sessionStorage.getItem("GlobalSearchZip"))})

    promise.then((item) => {
      if (!item || item.length === 0){
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
    promise.catch((item) => {
      this.setState({
        results: 'not found',
        zip: null
      })
    })
  },



  handleItemRedirect: function(){
    sessionStorage.setItem("itemID", this.state.id)
    this.props.history.pushState(this.state, 'item');
  },
  handleItem1Redirect: function(){
    sessionStorage.setItem("itemID", this.state.id1)
    this.props.history.pushState(this.state, 'item');
  },
  handleItem2Redirect: function(){
    sessionStorage.setItem("itemID", this.state.id2)
    this.props.history.pushState(this.state, 'item');
  },
  handleItem3Redirect: function(){
    sessionStorage.setItem("itemID", this.state.id3)
    this.props.history.pushState(this.state, 'item');
  },


  render: function() {
    var results = this.state.results;
    var zip = this.state.zip;
    if (results !== null && results !== 'not found'){
      return (
        <div>
        <div className="results">Here is what we found for: {this.state.zip}</div>
        <div className="resultsContainer">
          <div className="results">
            {results.map(function(item,index){
              return  <div>
                      <div className="teal">
                        RESULT {index+1}
                      </div>
                      <div>NAME:
                        <div className="result">{item.name}</div>
                      </div>
                      <div>PRICE:
                        <div className="result">${item.price}.00/Day</div>
                      </div>
                      <div>DESCRIPTION:
                        <div className="result">{item.description}</div>
                      </div>
                      <div  className="result">PIC:
                        <a target="_blank" href={item.photo} >Link</a>
                      </div>
                    </div>
            })}

          </div>
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
