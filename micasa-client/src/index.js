import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import App from './containers/App'

// const store = createStore(
//   rootReducer,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
//   )
// );

// ReactDOM.render(
//   <Provider >
//     <App  />
//   </Provider>, document.getElementById('root')
// )

ReactDOM.render(
    <App  />,
 document.getElementById('container')
)
