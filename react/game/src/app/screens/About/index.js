import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class About extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <h2 className={styles.title}>About - {user.name}</h2>
        <div className={styles.about}>
          <p className={styles.paragraph}>
            <span>Username:</span> {user.username}
          </p>
          <p className={styles.paragraph}>
            <span>Date of birth:</span> {user.date_of_birth}
          </p>
          <p className={styles.paragraph}>
            <span>e-Mail:</span> {user.email}
          </p>
          <p className={styles.paragraph}>
            <span>Resume:</span> {user.about}
          </p>
        </div>
      </Fragment>
    );
  }
}

About.propTypes = {
  user: PropTypes.shape(Object)
};

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps)(About));
