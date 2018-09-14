import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../../../redux/auth/actions';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
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
  error: PropTypes.string
};

const mapStateToProps = state => ({
  error: state.auth.error
});

export default withRouter(connect(mapStateToProps)(LoginFormContainer));
