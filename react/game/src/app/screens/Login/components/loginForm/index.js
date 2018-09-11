import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, email, minLength } from '../validation';
import { customInput } from '../fields';

import styles from './styles.scss';

class LoginForm extends Component {
  render() {
    const handleSubmit = event => {
      event.preventDefault();
      this.props.handleSubmit();
    };
    return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Field name="mail" component={customInput} type="mail" label="e-Mail" validate={[required, email]} />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(LoginForm);
