import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Goback extends Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    return (
      <button onClick={this.goBack} className={styles.gobackButton}>
        Go Back
      </button>
    );
  }
}

Goback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(connect()(Goback));
