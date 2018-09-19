import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import LIST from '../../../constants/routes';

class PrivateRoute extends Component {
  res = () => {
    const { component: AuthComponent, loggedin, isPrivate, path } = this.props;
    if (!loggedin && isPrivate) return <Redirect to={LIST.LOGIN.path} />;
    if (loggedin && isPrivate)
      return (
        <Fragment>
          <Navbar />
          <AuthComponent path={path} />
        </Fragment>
      );
  };

  render() {
    return <Route render={this.res} />;
  }
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  loggedin: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool
};

const mapStateToProps = state => ({
  loggedin: state.auth.auth !== null
});

export default connect(mapStateToProps)(PrivateRoute);
