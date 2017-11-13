import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Grid, Button, Dropdown } from 'semantic-ui-react';
import DropSelect from "../common/DropSelect";

const OrderSummary = ({}) => {
  return (
    <Segment attached>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header><Header.Subheader>Subtotal</Header.Subheader>$ 0.00</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header><Header.Subheader>Tax</Header.Subheader>$ 0.00</Header>
          </Grid.Column>
          <Grid.Column width={8}>
            <Dropdown
              fluid selection
              placeholder='Pickup/Delivery'
              options={[
                { text: 'Pickup', value: 'pickup', selected: true },
                { text: 'Delivery', value: 'delivery' }
              ]}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header><Header.Subheader>Total</Header.Subheader>$ 0.00</Header>
          </Grid.Column>
          <Grid.Column width={12} float='right' textAlign='right'>
            <Button primary size='large'>Save</Button>
            <Button positive size='large'>Pay</Button>
            <Button negative size='large'>Cancel</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

OrderSummary.propTypes = {

};

export default OrderSummary;

