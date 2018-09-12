import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedin, ...rest }) => {
  const res = props => (loggedin ? <Component {...props} /> : <Redirect to="/" />);

  return <Route {...rest} render={res} />;
};

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin
});

export default connect(mapStateToProps)(PrivateRoute);
