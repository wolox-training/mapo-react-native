import React, { Component, Fragment } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import loginActions from '../../../redux/auth/actions';
import LIST from '../../../constants/routes';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  setRedirect = values => {
    const { dispatch } = this.props;
    dispatch(loginActions.login(values));
  };

  checkLogInStatus = () => {
    const { loggedin } = this.props;
    return loggedin ? (
      <Redirect to={LIST.GAME.path} />
    ) : (
      <Fragment>
        <LoginForm onSubmit={this.setRedirect} />
        <p>{this.props.error}</p>
      </Fragment>
    );
  };

  render() {
    return this.checkLogInStatus();
  }
}

LoginFormContainer.propTypes = {
  error: PropTypes.string,
  loggedin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  error: state.auth.error,
  loggedin: state.auth.loggedin
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps)
);

export default enhance(LoginFormContainer);
