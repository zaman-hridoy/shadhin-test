import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import AppWrapper from './AppWrapper.js';
import * as serviceWorker from './serviceWorker';
// import store from '.'

import store from './store/configureStore.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/dev">
      <AppWrapper />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
