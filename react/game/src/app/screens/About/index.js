import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import userTypes from '../../../types/userTypes';
import DEFAULT_USER from '../../../constants/defaultUser';

import styles from './styles.scss';

class About extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <h2 className={styles.title}>About - {user.name}</h2>
        <div className={styles.about}>
          <p className={styles.paragraph}>
            <span className={styles.paragraphSpan}>Username:</span> {user.username}
          </p>
          <p className={styles.paragraph}>
            <span className={styles.paragraphSpan}>Date of birth:</span> {user.date_of_birth}
          </p>
          <p className={styles.paragraph}>
            <span className={styles.paragraphSpan}>e-Mail:</span> {user.email}
          </p>
          <p className={styles.paragraph}>
            <span className={styles.paragraphSpan}>Resume:</span> {user.about}
          </p>
        </div>
      </Fragment>
    );
  }
}

About.propTypes = {
  user: PropTypes.shape(userTypes.user).isRequired
};

const mapStateToProps = state => ({
  user: state.user.user !== null ? state.user.user : DEFAULT_USER
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps)
);

export default enhance(About);
