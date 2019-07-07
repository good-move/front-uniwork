import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './Navigation.css';

import styles from './Navigation.css';

const Navigation = (props) => {
    return (
        <div className={styles.nav}>
          <div className={styles.mainNav}>
            <NavigationItem link={'/'}>
              Главная
            </NavigationItem>
            <NavigationItem link={'/contractors'}>
              Исполнители
            </NavigationItem>
            <NavigationItem link={'/search'}>
                  Поиск
                </NavigationItem>
          </div>
          <div className={styles.extraNav}>
            <NavigationItem link={'/signin'}>
              Войти
            </NavigationItem>
          </div>
        </div>
    );
};

export default Navigation;
