import React from 'react';
import PropTypes from 'prop-types';
import ItemsTable from './ItemsTable';

// Renders the items panel on ManageOrderPage
// Should also render the addItem forms

const OrderItems = ({items, editItemClick, deleteItemClick}) => {
  const num = "00012";
  return (
    <div className="col-8 my-0">
      <div className="card">
        <h2 className="card-title">Order #{num}</h2>
        <ItemsTable items={items} editItemClick={editItemClick} deleteItemClick={deleteItemClick}/>
      </div>
    </div>
  );
};

OrderItems.propTypes = {
  editItemClick: PropTypes.func.isRequired,
  deleteItemClick: PropTypes.func.isRequired
};

export default OrderItems;
