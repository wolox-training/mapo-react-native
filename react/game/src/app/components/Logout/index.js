import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../../../redux/auth/actions';
import styles from '../Navbar/styles.scss';
import LIST from '../../../constants/routes';

class Logout extends Component {
  componentDidUpdate() {
    const { loggedin, history } = this.props;
    if (!loggedin) history.push(LIST.LOGIN.path);
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin
});

export default connect(mapStateToProps)(Logout);
