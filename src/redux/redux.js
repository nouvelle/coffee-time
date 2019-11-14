import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

// initial STATE
const initialState = {
  currentView: "LIST",
  checkedUnRead: [],
  unReadUrlLists: [],
  readUrlLists: []
};

// ACTIONS
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
  newURLList
});

export const deleteUnReadUrlLists = nonDeleteUnReadListArr => ({
  type: "DELETE_UNREAD_URL_LISTS",
  nonDeleteUnReadListArr
});

export const addReadUrlLists = newReadList => ({
  type: "ADD_READ_URL_LISTS",
  newReadList
});

// ACTION CREATER
const domain = document.domain;
let reqUrl;
domain === "localhost"
  ? (reqUrl = `http://${domain}:9000/api/urllist`)
  : (reqUrl = "/api/urllist");

export const getAllUrlListsAsync = async dispatch => {
  const urllist = await axios.get(reqUrl);
  return dispatch(addUrlLists(urllist.data));
};
export const addUnReadUrlListsAsync = addUrl => async dispatch => {
  const urllist = await axios.post(reqUrl, {
    URL: addUrl,
    date: Date.now(),
    name: "default name",
    isRead: false
  });
  return dispatch(addUnReadUrlLists(urllist.data));
};
export const addReadUrlListsAsync = newReadList => async dispatch => {
  await axios.patch(reqUrl, {
    date: newReadList[0].date,
    readDate: Date.now()
  });
  return dispatch(addReadUrlLists(newReadList));
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
            url: action.newURLList.URL,
            name: action.newURLList.name,
            date: action.newURLList.date,
            checked: action.newURLList.isRead
          }
        ]
      });
    }
    case "DELETE_UNREAD_URL_LISTS": {
      return Object.assign({}, state, {
        unReadUrlLists: action.nonDeleteUnReadListArr
      });
    }
    case "ADD_READ_URL_LISTS": {
      const clone = state.readUrlLists.concat();
      action.newReadList.forEach(list => {
        clone.push({
          url: list.url,
          name: list.name,
          date: list.date,
          readDate: list.readDate
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
