import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../../../redux/auth/actions';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  setRedirect = v => {
    const { dispatch, history } = this.props;
    dispatch(loginActions.login(v));
    history.push('/Game');
  };

  render() {
    return (
      <Fragment>
        <LoginForm onSubmit={this.setRedirect} />
        <p>{this.props.error}</p>
      </Fragment>
    );
  }
}

LoginFormContainer.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
  error: PropTypes.string
};

export default withRouter(connect()(LoginFormContainer));
