import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.css';

const NavigationItem = ({link, children}) => {
    return (
        <li>
            <NavLink
                to={link}
                exact
                activeClassName={styles.active}>
                {children}
            </NavLink>

        </li>
    );
};

export default NavigationItem;
