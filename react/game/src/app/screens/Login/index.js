import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  handleSubmit = () => {
    this.props.redir();
  };
  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

LoginFormContainer.propTypes = {
  redir: PropTypes.func.isRequired
};

export default LoginFormContainer;
