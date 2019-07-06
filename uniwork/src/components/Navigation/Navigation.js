import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
    return (
        <div>
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
            </ul>
        </div>
    );
};

export default Navigation;
