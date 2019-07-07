import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import styles from './Navigation.css';

const Navigation = (props) => {
    return (
        <div className={null}>
            <ul>
                <NavigationItem link={'/'}>
                    Главная
                </NavigationItem>
                <NavigationItem link={'/contractors'}>
                    Исполнители
                </NavigationItem>
                <NavigationItem link={'/customers'}>
                    Заказчики
                </NavigationItem>
                <NavigationItem link={'/search'}>
                  Поиск
                </NavigationItem>
            </ul>
        </div>
    );
};

export default Navigation;
