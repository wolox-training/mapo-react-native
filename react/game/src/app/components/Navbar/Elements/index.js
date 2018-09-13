import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles.scss';
import LIST from '../../../../constants/menuList';
import Logout from '../../Logout';

class Element extends Component {
  menuList = LIST.map((item, i) => (
    <NavLink
      key={i}
      className={styles.navbarMenuLink}
      activeClassName={styles.navbarMenuLinkActive}
      to={item.path}
    >
      {item.name}
    </NavLink>
  ));

  render() {
    return (
      <Fragment>
        {this.menuList}
        <Logout />
      </Fragment>
    );
  }
}

export default Element;
