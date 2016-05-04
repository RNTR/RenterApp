var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link 
var postRequests = require('../requests/post.js');
var getRequests = require('../requests/get.js');
var App = require('../App.jsx') ;
var $ = require('jquery');

var ItemPage = React.createClass({

	getInitialState: function(){

		return {
			photo: null,
			name: null,
			description: null,
			price: null,
			date_start: null,
			date_end: null

		};
	},

	componentDidMount: function(){	
		this.fetchItem();
	},



	fetchItem: function(){
		var stashedItemID = parseInt(sessionStorage.getItem('itemID')); //or itemID if coming from userpAGE
		var promise = postRequests.getItem({ itemID: stashedItemID })
		promise.then( (item) => {
			console.log('THIS IS THE ITEM OBJECT', item)
			this.setState({ 
				name: item.name,
				photo: item.photo,
				description: item.description,
				price: item.price,
				zip: item.zip
			 })
		})

	},

	handleDateStartChange: function(e){
		 this.setState({
      		date_start: e.target.value
    	})
	},

	handleDateEndChange: function(e){
		 this.setState({
      		date_end: e.target.value
    	})
	},

	handleItemRent: function(){
	var stashedItemID = parseInt(sessionStorage.getItem('itemID')); 
	var stashedUserID = parseInt(sessionStorage.getItem('userID')); 
	var startDate = this.state.date_start;
	var endDate = this.state.date_end;

		var bookingPromise = postRequests.bookItem(
			{rental:{
				user_id:stashedUserID, 
				item_id: stashedItemID, 
				date_start: startDate,
				date_end: endDate
			}}
			
	  )

		bookingPromise.then( (bookingResponse)  => {
			if(bookingResponse.status === 'complete'){
				$(".bookingPopup").popup({
				  opacity: 0.3,
				  transition: 'all 0.3s'
				});
			}
			else{
				alert('This item is not available for the dates selected.')
			}
		})


	},




	render: function(){
		return ( 
		<form className="itemPage" onSubmit={this.handleItemRent}>
			  <div className='itemDetails'>
			  	<div className="itemName"> <p>{this.state.name}</p> </div>
  				<div className='itemDescription' maxlength='50'><p>{this.state.description}</p></div>
  				<div className="itemZip"><span className='locatedIn'>Located in</span> {this.state.zip} </div>
  				<br/>
				<div className='itemPrice'> ${this.state.price}<span className='perHour'>/hr</span> </div>
				</div>
				<br/>
			      <div><img className='itemPhoto' src={this.state.photo} width='300' height='300' ></img></div>

				<br/>
				<div className='bookingDiv' display='none' >
					 <div className='bookStartDateWord'>Start 
					 		<input className='bookStartDate' type='date' onChange={this.handleDateStartChange} value={this.state.date_start}></input></div>
					 <br />
					 	<div className='bookEndDateWord'>End 
					 		<input className='bookEndDate' type='date' onChange={this.handleDateEndChange} value={this.state.date_end}></input></div>
					 <br />
				<input type='button' className="bookItemButton" onClick={this.handleItemRent} value='Rent this item!'></input>

				</div>
				<br/>
				
			  	<br/>
			</form>
			)
	}
})



		


module.exports = ItemPage;




