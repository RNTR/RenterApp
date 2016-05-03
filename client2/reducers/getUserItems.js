export function handleMessages(state, action) {
  switch (action.type) {
    case 'REQUEST_USER_ITEMS_FOR_RENT':
      return requestItems(state, action);
    case 'RECEIVE_USER_ITEMS_FOR_RENT':
      return receiveItems(state, action);
    case 'REQUEST_ITEMS_ERROR':
      return requestItemsError(state, action);
  }

  return state;
}

function requestItems(state, action) {
  let updates = {
    isFetchingItemsForRent: true,
  };

  return state.merge(updates);
};

function receiveItems(state, action) {
  let updates = {
    isFetchingItemsForRent: false,
    itemsForRent: action.entry,
  };

  return state.merge(updates);
}

function requestItemsError(state, action) {
  let updates = {
    isFetchingItemsForRent: false,
    itemsFetchError: action.entry,
  };

  return state.merge(updates);
}

