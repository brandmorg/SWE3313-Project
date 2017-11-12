import React from 'react';
import PropTypes from 'prop-types';

import DropSelect from '../../common/DropSelect';
import { Form, Checkbox, Grid, Button, Header } from 'semantic-ui-react';
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

const PizzaForm = ({ sizes, crusts, toppings, onChange, selectedItem }) => {

  const qty = [];
  for (let i = 0; i < 10; i++) { qty[i] = i + 1; }

  const price = selectedItem.price;

  return (
    <Form>
      <DropSelect label='Size' name='size' value={selectedItem.size} placeholder={'Size'} values={sizes} onChange={onChange}/>
      <DropSelect label='Crust' name='crust' value={selectedItem.crust} values={crusts} placeholder={'Crust Type'} onChange={onChange}/>
      <DropSelect label='Qty' values={qty} placeholder={qty[0].toString()}/>
      <Header as='h4'>Toppings</Header>
      <Form.Group>
        <Grid padded>
          {toppings.map((topping) =>
            <Form.Field width={5} key={topping}>
              <Checkbox label={topping} name='toppings' value={topping} />
            </Form.Field>)}
        </Grid>
      </Form.Group>
      <Header as='h2'>
        ${price}
      </Header>
      <Button.Group>
        <Button positive>Save</Button>
        <Button.Or />
        <Button negative>Cancel</Button>
      </Button.Group>
    </Form>
  );
};

PizzaForm.propTypes = {
  sizes: PropTypes.object.isRequired,
  crusts: PropTypes.object.isRequired,
  toppings: PropTypes.array.isRequired
}

export default PizzaForm;
