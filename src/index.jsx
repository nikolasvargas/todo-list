import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import App from './client/components/Main';
import rootReducer from './client/components/Reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, thunk, multi)(createStore)(rootReducer, devTools);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app')
);