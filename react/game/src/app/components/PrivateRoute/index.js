import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
  res = () => {
    const AuthComponent = this.props.component;
    return this.props.loggedin ? <AuthComponent path={this.props.path} /> : <Redirect to="/" />;
  };

  render() {
    return <Route render={this.res} />;
  }
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  loggedin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin
});

export default connect(mapStateToProps)(PrivateRoute);
