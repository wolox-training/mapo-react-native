import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';
import Elements from './components/Elements';
import Goback from './components/Goback';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className={styles.navbarMenu}>
          <Elements />
        </nav>
        <Goback />
      </Fragment>
    );
  }
}

export default connect()(Navbar);
