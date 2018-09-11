import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  render() {
    const handleSubmit = () => {
      this.props.redir();
    };
    return <LoginForm onSubmit={handleSubmit} />;
  }
}

LoginFormContainer.propTypes = {
  redir: PropTypes.func
};

export default LoginFormContainer;
