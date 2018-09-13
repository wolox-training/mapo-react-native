import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import LIST from '../constants/routes';

import Login from './screens/Login';
import Game from './screens/Game';
import About from './screens/About';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router basename={this.props.path}>
        <Switch>
          <Route exact path={LIST.LOGIN.path} component={Login} />
          <PrivateRoute path={LIST.GAME.path} component={Game} />
          <PrivateRoute path={LIST.ABOUT.path} component={About} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  path: PropTypes.string
};

export default App;
