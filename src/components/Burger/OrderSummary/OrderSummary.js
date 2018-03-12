import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('[OS] will update');
  }

  render() {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize', }}>{igKey}</span>
            : {this.props.ingredients[igKey]}
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
          <strong>Итоговая стоимость: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Продолжить заказ?</p>
        <Button
          btnType='Danger'
          clicked={this.props.purchaseCancelled}
        >
          ВЕРНУТЬСЯ
        </Button>
        <Button
          btnType='Success'
          clicked={this.props.purchaseContinued}
        >
          ПРОДОЛЖИТЬ
        </Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default OrderSummary;
