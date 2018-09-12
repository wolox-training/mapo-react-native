import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../../../redux/auth/actions';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  componentDidUpdate() {
    const { loggedin, history } = this.props;
    if (loggedin) history.push('/Game');
  }

  setRedirect = values => {
    const { dispatch } = this.props;
    dispatch(loginActions.login(values));
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
  history: PropTypes.instanceOf(Object).isRequired,
  error: PropTypes.string,
  loggedin: PropTypes.bool
};

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin,
  error: state.auth.error
});

export default withRouter(connect(mapStateToProps)(LoginFormContainer));
