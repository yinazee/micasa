import { combineReducers } from "redux";
import uuid from "uuid";

const rootReducer = combineReducers({
  homes: homesReducer,
  reviews: reviewsReducer
})

function homesReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case 'ADD_HOME':
    return [...state, action.home];

    case "REMOVE_HOME"
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx +1)];

    case "ADD_REVIEW":
      let existingHome = state.filter(
        home => home.name === action.home.name
      );
      if (existingHome.length > 0) {
        return state;
      } else {
        return [...state, { name: action.home.name, id: uuid() }];
      }

    default:
      return state;
  }
}

function reviewsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.book];

    case "REMOVE_REVIEW":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default rootReducer;
