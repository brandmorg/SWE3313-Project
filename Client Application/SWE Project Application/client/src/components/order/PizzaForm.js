import React from 'react';
import TextInput from '../common/TextInput';

/*
* A Pizza has
*   a size:
*     Small, Medium, Large, XL?
*   toppings:
*     Pepperoni,
*     Cheese,
*     Sausage
*     Pineapple
*   Crust Options
*     Regular, Thin, Stuffed
*     */

const PizzaForm = ({ pizza }) => {
  return (
    <form>
      <fieldset>
        <legend>New Pizza</legend>
        {/*<fieldset>
          <label htmlFor="pizzaSize">Size</label>
          <select
            name="pizzaSize"
            value=>

          </select>
        </fieldset>*/}
      </fieldset>
    </form>
  );
};

export default PizzaForm;
