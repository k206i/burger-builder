import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link='/'>
        Burger Buider
      </NavigationItem>
      <NavigationItem link='/orders'>
        Заказы
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
