import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
* This component renders
*   -The customer info for the order
*   -The order type IN(pickup, delivery)
*   -The order total (calculated field)
*   -Buttons for various actions like
*     -Submit/Save
*     -Pay
*     -Print Receipt
*     -Cancel
*     */

class OrderSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="bg-light">
        <h2 className="card-title">Test</h2>
      </div>
    );
  }
};

OrderSummary.propTypes = {
  customer: PropTypes.object.isRequired
};

export default OrderSummary;
