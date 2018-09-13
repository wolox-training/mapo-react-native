import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles.scss';
import LIST from '../../../../../constants/routes';
import Logout from '../../../Logout';

class Element extends Component {
  menuList = obj => {
    const mapped = [];
    for (const item of Object.values(obj)) { // eslint-disable-line
      if (item.name !== 'login') {
        mapped.push(
          <NavLink
            exact
            key={mapped.length}
            className={styles.navbarMenuLink}
            activeClassName={styles.navbarMenuLinkActive}
            to={item.path}
          >
            {item.name}
          </NavLink>
        );
      }
    }
    return mapped;
  };

  render() {
    return (
      <Fragment>
        {this.menuList(LIST)}
        <Logout />
      </Fragment>
    );
  }
}

export default Element;
