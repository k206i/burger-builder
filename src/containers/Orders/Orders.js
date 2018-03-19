import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Order from '../../components/Order/Order';

class Orders extends Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

Orders.propTypes = {};

export default Orders;
