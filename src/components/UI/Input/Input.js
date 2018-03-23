import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'textarea':
      inputElement =
        <textarea
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />;
      break;
    case 'select':
      inputElement =(
        <select
          onChange={props.changed}
          className={classes.InputElement}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case 'input':
    default:
      inputElement =
        <input
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  elementConfig: PropTypes.object,
  elementType: PropTypes.string,
};

export default Input;
