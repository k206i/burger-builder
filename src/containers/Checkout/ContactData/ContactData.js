import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axiosOrders from '../../../axios-orders';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'M M',
        address: {
          street: 'Tester st',
          zipCode: '235543',
          country: 'Germany',
        },
        email: 'test@test.ru',
        deiveryMethod: 'fastest',
      }
    };
    axiosOrders
      .post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false,
        });
      });

    console.log(this.props.ingredients)
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Ваше имя'
        />
        <input
          className={classes.Input}
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Улица'
        />
        <input
          className={classes.Input}
          type='text'
          name='postal'
          placeholder='дом'
        />
        <Button
          btnType='Success'
          clicked={this.orderHandler}
        >
          ЗАКАЗАТЬ
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Введите ваш адрес</h4>
        {form}
      </div>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.number,
};

export default ContactData;
