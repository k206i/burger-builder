import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Салат', type: 'salad' },
  { label: 'Бекон', type: 'bacon' },
  { label: 'Сыр', type: 'cheese' },
  { label: 'Мясо', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Стоимость: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Заказать
    </button>
  </div>
);

export default BuildControls;
