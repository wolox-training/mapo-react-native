import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { required } from '../validation';
import { customInput } from '../fields';

import styles from './styles.scss';

class LoginForm extends Component {
  render() {
    return (
      <form className={styles.loginForm}>
        <Field name="username" component={customInput} type="text" label="Username" validate={[required]} />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required]}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(LoginForm);
