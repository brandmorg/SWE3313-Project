import React from 'react';
import PropTypes from 'prop-types';

import DropSelect from '../../common/DropSelect';
import { Form, Button, Header } from 'semantic-ui-react';
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

const DrinkForm = ({ sizes, flavors, onChange, selectedItem, cancelClick }) => {

  const qty = [];
  for (let i = 0; i < 10; i++) { qty[i] = i + 1; }

  return (
    <Form>
      <DropSelect width={10} label='Size' name='size' value={selectedItem.size} placeholder={'Size'} values={sizes} onChange={onChange}/>
      <DropSelect width={10} label='Flavor' name='flavor' value={selectedItem.flavor} values={flavors} placeholder={'Flavor'} onChange={onChange}/>
      <DropSelect width={10} label='Qty' values={qty} placeholder={qty[0].toString()}/>

      <Header as='h2'>${selectedItem.price}</Header>
      <Button.Group>
        <Button positive>Save</Button>
        <Button.Or />
        <Button negative onClick={cancelClick}>Cancel</Button>
      </Button.Group>
    </Form>
  );
};

DrinkForm.propTypes = {
  selectedItem: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  sizeOpts: PropTypes.array.isRequired,
  flavorOpts: PropTypes.array.isRequired
}

export default DrinkForm;
