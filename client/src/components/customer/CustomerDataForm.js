import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

const CustomerDataForm = ({ customer, bindData }) => {
  return (
    <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            label='First name'
            name='firstName'
            value={customer.firstName}
            onChange={bindData}
          />
          <Form.Input
            label='Last name'
            name='lastName'
            value={customer.lastName}
            onChange={bindData}
          />
        </Form.Group>

        <Form.Input
          label='Street'
          name='address'
          value={customer.address}
          onChange={bindData} />

        <Form.Group widths='equal'>
          <Form.Input
            label='City'
            name='city'
            value={customer.city}
            onChange={bindData}
          />
          <Form.Input
            label='State'
            name='state'
            value={customer.state}
            onChange={bindData}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label='Zip'
            name='zip'
            value={customer.zip}
            onChange={bindData}
            width={4}/>
          <Form.Input
            label='Phone'
            name='phone'
            value={customer.phone}
            onChange={bindData}
            width={8}/>
        </Form.Group>
      </Form>
      <Button.Group>
        <Button primary>Save</Button>
        <Button.Or />
        <Button>Clear</Button>
      </Button.Group>
    </div>
  );
};

CustomerDataForm.propTypes = {
  customer: PropTypes.object.isRequired,
  bindData: PropTypes.func.isRequired
};

export default CustomerDataForm;
