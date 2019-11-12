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

export const addUnReadUrlLists = newUnReadList => ({
  type: "ADD_UNREAD_URL_LISTS",
  newUnReadList,
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

export const getUnReadUrlLists = getUnReadList => ({
  type: "GET_UNREAD_URL_LISTS",
  getUnReadList
});

export const getReadUrlLists = getReadList => ({
  type: "GET_READ_URL_LISTS",
  getReadList
});

// ACTION CREATER
export const getUnReadUrlListsAsync = async dispatch => {
  const urllist = await axios.get("http://localhost:9000/api/urllist");
  return dispatch(addUnReadUrlLists(urllist.data));
};

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_VIEW": {
      return Object.assign({}, state, { currentView: action.newView });
    }
    case "ADD_UNREAD_URL_LISTS": {
      if (state.unReadUrlLists.length === 0)
        state.unReadUrlLists = initialState.unReadUrlLists;

      if (Array.isArray(action.newUnReadList)) {
        const clone = state.unReadUrlLists.concat();
        action.newUnReadList.forEach(list => {
          clone.push({
            index: list.id,
            url: list.URL,
            name: list.name,
            date: list.date,
            checked: list.checked
          });
        });
        return Object.assign({}, state, {
          unReadUrlLists: clone
        });
      } else {
        return Object.assign({}, state, {
          unReadUrlLists: [
            ...state.unReadUrlLists,
            {
              index:
                state.unReadUrlLists[state.unReadUrlLists.length - 1].index + 1,
              url: action.newUnReadList,
              name: "default name",
              date: action.date,
              checked: false
            }
          ]
        });
      }
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
