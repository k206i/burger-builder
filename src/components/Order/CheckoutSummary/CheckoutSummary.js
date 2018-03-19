import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Приятного аппетита</h1>
      <div style={{
        width: '100%',
        margin: 'auto',
      }}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType='Danger'
        clicked={props.checkoutCancelled}
      >
        Отменить
      </Button>
      <Button
        btnType='Success'
        clicked={props.checkoutContinued}
      >
        Продолжить
      </Button>
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredients: PropTypes.object,
  checkoutContinued: PropTypes.func,
  checkoutCancelled: PropTypes.func,
};

export default CheckoutSummary;
