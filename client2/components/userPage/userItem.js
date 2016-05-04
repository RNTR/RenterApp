export function GetUserItemsForRent({ user_id }) {
  return (
    <div className="singleUserItemForRent">
    {
    	 <div className="userItem">{ user.items }</div>  
    }
    </div>
  );
};



// tutorial4.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

// tutorial2.js
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});