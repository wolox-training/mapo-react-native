import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../../../redux/auth/actions';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  setRedirect = () => {
    const { dispatch, history } = this.props;
    dispatch(loginActions.login);
    history.push('/Game');
  };

  render() {
    return <LoginForm onSubmit={this.setRedirect} />;
  }
}

LoginFormContainer.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
};

export default withRouter(connect()(LoginFormContainer));
