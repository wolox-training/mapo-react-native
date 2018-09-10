import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './scss/index.scss';
import Login from './app/screens/Login';
import Game from './app/screens/Game';

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

const loggedin = true;
const App = props => (
  <Router basename={props.path}>
    <div>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/game" render={() => (loggedin ? <Game /> : <Redirect to="/" />)} />
    </div>
  </Router>
);

App.propTypes = {
  path: PropTypes.string
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
