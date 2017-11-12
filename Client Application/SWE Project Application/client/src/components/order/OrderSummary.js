import React from 'react';
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

const OrderSummary = ({customer}) => {
  return (
    <div className="col-4 my-0">
      <div className="card">
        <h2 className="card-title">Test</h2>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  customer: PropTypes.object.isRequired
};

export default OrderSummary;
