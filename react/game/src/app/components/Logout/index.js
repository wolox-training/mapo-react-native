import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../../../redux/auth/actions';
import styles from '../Navbar/styles.scss';

class Logout extends Component {
  componentDidUpdate() {
    const { loggedin, history } = this.props;
    if (!loggedin) history.push('/');
  }

  logout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginActions.logout());
  };

  render() {
    return (
      <button onClick={this.logout} className={styles.navbarMenuLinkButton}>
        Logout
      </button>
    );
  }
}

Logout.propTypes = {
  loggedin: PropTypes.bool.isRequired,
  history: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin
});

export default connect(mapStateToProps)(Logout);
