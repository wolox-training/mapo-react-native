import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LIST from '../../../constants/routes';
import { history } from '../../../redux/store';
import Login from '../../screens/Login';
import Game from '../../screens/Game';
import About from '../../screens/About';
import WithLoading from '../WithLoading';
import PrivateRoute from '../PrivateRoute';

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={LIST.LOGIN.path} component={Login} />
      <PrivateRoute path={LIST.GAME.path} component={Game} isPrivate />
      <PrivateRoute path={LIST.ABOUT.path} component={About} isPrivate />
    </Switch>
  </ConnectedRouter>
);

const mapStateToProps = state => ({
  initialLoading: state.auth.initialLoading
});

const enhance = compose(
  connect(mapStateToProps),
  WithLoading(props => props.initialLoading, 'Loading game ...')
);

export default enhance(Router);
