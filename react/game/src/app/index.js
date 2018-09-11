import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './screens/Login';
import Game from './screens/Game';

class App extends Component {
  state = { loggedin: false };

  setRedirect = () => {
    this.setState({ loggedin: true });
  };

  loginProps = () => {
    if (this.state.loggedin) return <Game />;
    return <Login redir={this.setRedirect} />;
  };

  render() {
    return (
      <Router basename={this.props.path}>
        <Fragment>
          <Route exact path="/" component={this.loginProps} />
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  path: PropTypes.string
};

export default App;
