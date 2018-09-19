import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as loginActions } from '../../../redux/auth/actions';
import styles from '../Navbar/styles.scss';

class Logout extends Component {
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

const mapStateToProps = state => ({
  loggedin: state.auth.auth.status
});

export default connect(mapStateToProps)(Logout);
