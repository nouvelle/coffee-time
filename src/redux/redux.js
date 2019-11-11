import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// initial STATE
const initialState = {
  currentView: "LIST",
  unReadUrlLists: [
    {
      url: "https://www.starbucks.co.jp/",
      name: "HOMEPAGE - STARBUCK JAPAN",
      date: "201911112056"
    },
    {
      url: "https://stories.starbucks.com/",
      name: "HOMEPAGE - STARBUCK US",
      date: "201911101245"
    },
    {
      url:
        "https://stories.starbucks.com/stories/2019/make-merry-at-starbucks-this-holiday/",
      name: "Make merry at Starbucks this holiday season",
      date: "201911111034"
    }
  ],
  readUrlLists: [
    {
      url: "https://martinfowler.com/bliki/ContinuousDelivery.html",
      name: "ContinuousDelivery",
      date: "20191105100"
    },
    {
      url: "https://will.koffel.org/post/2014/12-factor-apps-in-plain-english/",
      name: "12 FACTOR APPS IN PLAIN ENGLISH",
      date: "201911091710"
    },
    {
      url:
        "https://itnext.io/how-existing-redux-patterns-compare-to-the-new-redux-hooks-b56134c650d2",
      name: "How Redux Connect compares to the new Redux Hooks.",
      date: "201911011840"
    }
  ]
};

// ACTIONS
export const changeCurrentView = newView => ({
  type: "CURRENT_VIEW",
  newView
});

export const addUnReadUrlLists = newUnReadList => ({
  type: "ADD_UNREAD_URL_LISTS",
  unReadList: newUnReadList,
  name: "DEFAULT NAME",
  date: String(new Date())
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

// ACTION CREATER
// export const getUnReadUrlListsAsync = dispatch => {
//   const
// }

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_VIEW": {
      return Object.assign({}, state, { currentView: action.newView });
    }
    case "ADD_UNREAD_URL_LISTS": {
      console.log(state);
      return Object.assign({}, state, {
        unReadUrlLists: [
          ...state.unReadUrlLists,
          {
            url: action.unReadList,
            name: action.name,
            date: action.date
          }
        ]
      });
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
