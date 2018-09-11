import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './scss/index.scss';
import Login from './app/screens/Login';
import Game from './app/screens/Game';

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

class App extends Component {
  state = { loggedin: false };

  setRedirect = () => {
    this.setState({ loggedin: true });
  };

  loginProps = () => {
    if (this.state.loggedin) return <Game />;
    return <Login red={this.setRedirect} />;
  };

  render() {
    return (
      <Router basename={this.props.path}>
        <Fragment>
          <Route exact path="/" component={this.loginProps} />
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  path: PropTypes.string
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
