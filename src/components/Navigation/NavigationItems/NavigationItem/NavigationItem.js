import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a
        className={props.active
          ? classes.active
          : null}
        href={props.link}
      >
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default NavigationItem;
