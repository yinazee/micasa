import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk'

const homes = (state = [], action) => {
  switch(action.type) {
    case 'GET_HOME_SUCCESS':
    return action.homes;

    default:
    return state;
  }
}

const reducers = combineReducers({
  homes: homes
})

const middleware = [thunk];
//
// export default createStore(
//   reducers,
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || reducers;

const store =  createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)),
)

export default store;
