import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients =
    Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        // "_" - значит, не нужный параметр
          .map((_, i) => {
            return (
              <BurgerIngredient
                key={igKey + i}
                type={igKey}/>
            )
          })
      })
      .reduce((newArr, el) => {
        return newArr.concat(el);
      }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>
        Пожалуйста, начните добавлять ингредиенты
      </p>
    )
  }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
