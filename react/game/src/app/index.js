import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginActions from '../redux/auth/actions';

import Router from './components/Router';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loginActions.localCheck());
  }

  render() {
    return <Router />;
  }
}

export default connect()(App);
