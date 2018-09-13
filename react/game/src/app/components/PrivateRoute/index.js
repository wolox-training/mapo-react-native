import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import LIST from '../../../constants/routes';

class PrivateRoute extends Component {
  res = () => {
    const AuthComponent = this.props.component;
    return this.props.loggedin ? (
      <Fragment>
        <Navbar />
        <AuthComponent path={this.props.path} />
      </Fragment>
    ) : (
      <Redirect to={LIST.LOGIN.path} />
    );
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
