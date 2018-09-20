import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { actionCreators as loginActions } from '../../../redux/auth/actions';
import withLoading from '../../components/WithLoading';

import LoginForm from './components/loginForm';
import withAuth from './components/withAuth';

class LoginFormContainer extends Component {
  setRedirect = async values => {
    const { dispatch } = this.props;
    dispatch(loginActions.login(values));
  };

  render() {
    return (
      <Fragment>
        <LoginForm onSubmit={this.setRedirect} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.authError,
  loggedin: state.auth.auth !== null,
  loader: state.auth.authLoading
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps),
  withAuth(props => props.loggedin, props => props.error),
  withLoading(props => props.loader, 'Validating data ...')
);

export default enhance(LoginFormContainer);
