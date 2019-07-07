import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.css';

const NavigationItem = ({link, children}) => {
  return (
    <NavLink
        to={link}
        exact
        className={styles.navItem}
        activeClassName={styles.active}>
        {children}
    </NavLink>
  );
};

export default NavigationItem;
