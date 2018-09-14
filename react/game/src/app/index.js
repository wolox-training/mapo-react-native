import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import LIST from '../constants/routes';
import loginActions from '../redux/auth/actions';
import { history } from '../redux/store';

import Login from './screens/Login';
import Game from './screens/Game';
import About from './screens/About';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loginActions.localCheck());
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute exact path={LIST.LOGIN.path} component={Login} isPublic />
          <PrivateRoute path={LIST.GAME.path} component={Game} isPrivate />
          <PrivateRoute path={LIST.ABOUT.path} component={About} isPrivate />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default connect()(App);
