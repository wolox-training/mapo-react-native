import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import loginActions from '../../../redux/auth/actions';

import LoginForm from './components/loginForm';
import withAuth from './components/withAuth';
import withLoading from './components/withLoading';

class LoginFormContainer extends Component {
  setRedirect = async values => {
    const { dispatch } = this.props;
    await dispatch(loginActions.loaderActive());
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
  error: state.auth.error,
  loggedin: state.auth.loggedin,
  loader: state.auth.loggingLoading
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps),
  withAuth(props => props.loggedin),
  withLoading(props => props.loader)
);

export default enhance(LoginFormContainer);
