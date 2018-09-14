import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles.scss';
import LIST from '../../../../../constants/routes';
import Logout from '../../../Logout';

const MENULIST = Object.values(LIST);

class Element extends Component {
  renderList = item =>
    item.name !== 'login' && (
      <NavLink
        exact
        key={item.name}
        className={styles.navbarMenuLink}
        activeClassName={styles.navbarMenuLinkActive}
        to={item.path}
      >
        {item.name}
      </NavLink>
    );

  render() {
    return (
      <Fragment>
        {MENULIST.map(this.renderList)}
        <Logout />
      </Fragment>
    );
  }
}

export default Element;
