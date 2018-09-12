import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './screens/Login';
import Game from './screens/Game';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router basename={this.props.path}>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/game" component={Game} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  path: PropTypes.string
};

export default App;
