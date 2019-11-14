import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

// initial STATE
const initialState = {
  incrementNo: 0,
  currentView: "LIST",
  checkedUnRead: [],
  unReadUrlLists: [],
  readUrlLists: []
};

// ACTIONS
export const addIncrementNo = () => ({
  type: "ADD_INCREMENT_NO"
});

export const changeCurrentView = newView => ({
  type: "CURRENT_VIEW",
  newView
});

export const addUrlLists = newURLList => ({
  type: "ADD_URL_LISTS",
  newURLList,
  date: Date.now()
});
export const addUnReadUrlLists = newURLList => ({
  type: "ADD_UN_READ_URL_LISTS",
  newURLList,
  date: Date.now()
});

export const deleteUnReadUrlLists = nonDeleteUnReadListArr => ({
  type: "DELETE_UNREAD_URL_LISTS",
  nonDeleteUnReadListArr
});

export const toggleUnReadUrlCheckBox = index => ({
  type: "TOGGLE_UNREAD_CHECK_BOX",
  index
});

export const addReadUrlLists = newReadList => ({
  type: "ADD_READ_URL_LISTS",
  newReadList,
  readDate: Date.now()
});

// ACTION CREATER
export const getAllUrlListsAsync = async dispatch => {
  const domain = document.domain;
  let urllist;
  if (domain === "localhost") {
    urllist = await axios.get(`http://${domain}:9000/api/urllist`);
  } else {
    urllist = await axios.get(`/api/urllist`);
  }
  console.log(urllist.data);
  return dispatch(addUrlLists(urllist.data));
};

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INCREMENT_NO": {
      return Object.assign({}, state, { incrementNo: state.incrementNo + 1 });
    }
    case "CURRENT_VIEW": {
      return Object.assign({}, state, { currentView: action.newView });
    }
    case "ADD_URL_LISTS": {
      if (state.unReadUrlLists.length === 0)
        state.unReadUrlLists = initialState.unReadUrlLists;
      if (state.readUrlLists.length === 0)
        state.readUrlLists = initialState.readUrlLists;

      const unReadClone = state.unReadUrlLists.concat();
      const readClone = state.readUrlLists.concat();
      action.newURLList.forEach(list => {
        if (!list.isRead) {
          unReadClone.push({
            index: list.id,
            url: list.URL,
            name: list.name,
            date: list.date,
            checked: list.isRead
          });
        } else {
          readClone.push({
            index: list.id,
            url: list.URL,
            name: list.name,
            date: list.date,
            checked: list.isRead
          });
        }
      });
      return Object.assign({}, state, {
        unReadUrlLists: unReadClone,
        readUrlLists: readClone
      });
    }
    case "ADD_UN_READ_URL_LISTS": {
      return Object.assign({}, state, {
        unReadUrlLists: [
          ...state.unReadUrlLists,
          {
            index: state.incrementNo,
            url: action.newURLList,
            name: "default name",
            date: action.date,
            checked: false
          }
        ]
      });
    }
    case "DELETE_UNREAD_URL_LISTS": {
      return Object.assign({}, state, {
        unReadUrlLists: action.nonDeleteUnReadListArr
      });
    }
    case "TOGGLE_UNREAD_CHECK_BOX": {
      return Object.assign({}, state, {
        unReadUrlLists: [
          ...state.unReadUrlLists.slice(0, action.index),
          {
            ...state.unReadUrlLists[action.index],
            checked: !state.unReadUrlLists[action.index].checked
          },
          ...state.unReadUrlLists.slice(action.index + 1)
        ]
      });
    }
    case "ADD_READ_URL_LISTS": {
      const clone = state.readUrlLists.concat();
      action.newReadList.forEach(list => {
        clone.push({
          url: list.url,
          name: list.name,
          date: list.date,
          readDate: action.readDate
        });
      });
      return Object.assign({}, state, {
        readUrlLists: clone
      });
    }
    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
