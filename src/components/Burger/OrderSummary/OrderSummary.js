import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize', }}>{igKey}</span>
          : {props.ingredients[igKey]}
        </li>
      );
    });
  return (
    <Aux>
      <h3>Ваш заказ</h3>
      <p>Крутой бургер с ингредиентами:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>
        <strong>Итоговая стоимость: {props.price.toFixed(2)}</strong>
      </p>
      <p>Продолжить заказ?</p>
      <Button
        btnType='Danger'
        clicked={props.purchaseCancelled}
      >
        ВЕРНУТЬСЯ
      </Button>
      <Button
        btnType='Success'
        clicked={props.purchaseContinued}
      >
        ПРОДОЛЖИТЬ
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default OrderSummary;
