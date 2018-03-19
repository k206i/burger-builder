import React from 'react';
import classes from './Order.css';

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>
        Ингредиенты: Salad (1)
      </p>
      <p>
        Стоимость: <strong>USD 5.55</strong>
      </p>
    </div>
  );
};

export default Order;