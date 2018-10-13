import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './client/components/Main';
import Reducers from './client/components/Reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(Reducers, devTools);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app')
);