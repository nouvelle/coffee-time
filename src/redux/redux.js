import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// initial STATE
const initialState = {
  currentView: "List",
  unReadUrlLists: [],
  ReadUrlLists: []
};

// ACTIONS
export const changeCurrentView = newView => ({
  type: "CURRENT_VIEW",
  newView
});

export const addUnReadUrlLists = newUnReadList => ({
  type: "ADD_UNREAD_URL_LISTS",
  newUnReadList
});

export const addReadUrlLists = newReadList => ({
  type: "ADD_READ_URL_LISTS",
  newReadList
});

export const getUnReadUrlLists = getUnReadList => ({
  type: "GET_UNREAD_URL_LISTS",
  getUnReadList
});

export const getReadUrlLists = getReadList => ({
  type: "GET_READ_URL_LISTS",
  getReadList
});

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_VIEW": {
      return Object.assign({}, state, { currentView: action.newView });
    }
    case "ADD_UNREAD_URL_LISTS": {
      return state;
    }
    case "ADD_READ_URL_LISTS": {
      return state;
    }
    case "GET_UNREAD_URL_LISTS": {
      return state;
    }
    case "GET_READ_URL_LISTS": {
      return state;
    }
    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
