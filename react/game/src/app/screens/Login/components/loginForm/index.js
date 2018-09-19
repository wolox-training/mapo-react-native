import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { LOGIN_FORM } from '../../../../../constants/formNames';
import { required, email, minLength } from '../validation';
import { customInput } from '../fields';

class LoginForm extends Component {
  handleSubmit = (event, values) => {
    event.preventDefault();
    this.props.handleSubmit(values);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
  handleSubmit: PropTypes.func.isRequired
};

const enhance = compose(
  withRouter,
  connect(),
  reduxForm({
    form: LOGIN_FORM
  })
);

export default enhance(LoginForm);
