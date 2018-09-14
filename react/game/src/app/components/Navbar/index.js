import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';
import Elements from './components/Elements';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbarMenu}>
        <Elements />
      </nav>
    );
  }
}

export default connect()(Navbar);
