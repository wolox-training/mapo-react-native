import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

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
    const { initialLoading } = this.props;
    return initialLoading ? (
      <Spinner name="circle" />
    ) : (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={LIST.LOGIN.path} component={Login} />
          <PrivateRoute path={LIST.GAME.path} component={Game} isPrivate />
          <PrivateRoute path={LIST.ABOUT.path} component={About} isPrivate />
        </Switch>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  initialLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  initialLoading: state.auth.initialLoading
});

export default connect(mapStateToProps)(App);
