import React from 'react';
import classes from './Order.css';

const Order = (props) => {

  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '#ccc 1px solid',
        padding: '5px',
      }}
    >
      {ig.name} ({ig.amount})</span>;
  });

  return (
    <div className={classes.Order}>
      <p>
        Ингредиенты: {ingredientOutput}
      </p>
      <p>
        Стоимость: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
