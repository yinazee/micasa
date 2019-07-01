import { combineReducers } from "redux";
import cuid from 'cuid';

export const cuidFn = cuid;

const rootReducer = combineReducers({
  homes: homesReducer,
  reviews: reviewsReducer
})

function homesReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case 'ADD_HOME':

    const home = { text: action.text, id: cuidFn() }
    return { ...state, homes: [ ...state.homes, home]
    }


    case "REMOVE_HOME":

      const homes = state.homes.filter( home => home.id !== home.id )

      return { ...state, homes}

    case "ADD_REVIEW":
      let existingHome = state.filter(
        home => home.name === action.home.name
      );
      if (existingHome.length > 0) {
        return state;
      } else {
        return [...state, { name: action.home.name, id: cuidFn() }];
      }

    default:
      return state;
  }
}

function reviewsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.review];

    case "REMOVE_REVIEW":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default rootReducer;
