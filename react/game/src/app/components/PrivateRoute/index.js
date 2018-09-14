import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import LIST from '../../../constants/routes';

class PrivateRoute extends Component {
  res = ({ ...routeProps }) => {
    const { component: AuthComponent, isPrivate, isPublic, loggedin, location } = this.props;

    if (loggedin && isPublic) {
      return (
        <Redirect
          to={{
            pathname: LIST.GAME.path,
            state: { from: location }
          }}
        />
      );
    } else if (!loggedin && isPrivate) {
      return (
        <Redirect
          to={{
            pathname: LIST.LOGIN.path,
            state: { from: location }
          }}
        />
      );
    }
    return <AuthComponent {...routeProps} />;

    // if (public && !loggedin) return <AuthComponent path={path} />;
    // if (public && loggedin) return <Redirect to={LIST.GAME.path} />;
    // if (!public && loggedin) {
    //   return (
    //     <Fragment>
    //       <Navbar />
    //       <AuthComponent path={this.props.path} />
    //     </Fragment>
    //   );
    // }
    // if (!this.props.public && !this.props.loggedin) return <Redirect to={LIST.LOGIN.path} />;
  };

  render() {
    const { isPrivate, isPublic, loggedin, component, ...props } = this.props;
    return <Route {...props} render={this.res} />;
  }
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  loggedin: PropTypes.bool.isRequired,
  public: PropTypes.bool
};

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin
});

export default connect(mapStateToProps)(PrivateRoute);
