import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import './scss/index.scss';
import Login from './app/screens/Login';

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
