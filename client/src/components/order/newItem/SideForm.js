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

const SideForm = ({ sides, onChange, selectedItem }) => {

  const qty = [];
  for (let i = 0; i < 10; i++) { qty[i] = i + 1; }

  return (
    <Form>
      <DropSelect label='Side' name='side' value={selectedItem.side} placeholder={'Select Side...'} values={sides} onChange={onChange}/>
      <DropSelect label='Qty' values={qty} placeholder={qty[0].toString()}/>

      <Header as='h2'>${selectedItem.price}</Header>
      <Button.Group>
        <Button positive>Save</Button>
        <Button.Or />
        <Button negative>Cancel</Button>
      </Button.Group>
    </Form>
  );
};

SideForm.propTypes = {
  selectedItem: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  sides: PropTypes.array.isRequired,
}

export default SideForm;
