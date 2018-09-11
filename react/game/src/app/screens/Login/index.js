import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './components/loginForm';

class LoginFormContainer extends Component {
  render() {
    const handleSubmit = () => {
      this.props.red();
    };
    return <LoginForm onSubmit={handleSubmit} />;
  }
}

LoginFormContainer.propTypes = {
  red: PropTypes.func
};

export default LoginFormContainer;
