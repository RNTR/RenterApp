import 'whatwg-fetch'

export function getUserItemsForRent(userID) {
  return (dispatch) => {
    dispatch(requestUserItems());

    fetch(`items/user/${userID}`)
      .then(function (userID) {
        let itemsResponse = userID.json();
        dispatch(receiverUserItems(itemsResponse));
      })
      .catch(function (error) {
        dispatch(requestItemsError(error));
      });
  };
};


function requestUserItems() {
  return { type: 'REQUEST_USER_ITEMS_FOR_RENT' }
};

function receiverUserItems() {
  return { type: "RECEIVE_USER_ITEMS_FOR_RENT", entry: itemsForRent }
};

export function requestItemsError(error) {
  if (error) console.error('Error requesting items:', error);
  return { type: 'REQUEST_ITEMS_ERROR', entry: error, };
};







