import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './screens/Login';
import Game from './screens/Game';
import PrivateRoute from './components/PrivateRoute';
import loginAPI from './components/API';

class App extends Component {
<<<<<<< HEAD
=======
  state = { loggedin: false, error: '' };

  setRedirect = v => {
    loginAPI(v, res => {
      if (res.ok) this.setState({ loggedin: true });
      else this.setState({ error: res.data.error.message });
    });
  };

  loginProps = () => {
    if (this.state.loggedin) return <Redirect to="/Game" />;
    return <Login redir={this.setRedirect} error={this.state.error} />;
  };

>>>>>>> error message
  render() {
    return (
      <Router basename={this.props.path}>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/game" component={Game} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  path: PropTypes.string
};

export default App;
