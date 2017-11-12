import React from 'react';
import PropTypes from 'prop-types';
import ItemsTableRow from "./ItemsTableRow";

// Renders the list of Items

const ItemsTable = ({items, editItemClick, deleteItemClick}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {items.map((item, index) =>
        <ItemsTableRow
          key={index}
          rowNumber={index + 1}
          item={item}
          editClick={editItemClick}
          deleteClick={deleteItemClick}/>
      )}
      </tbody>
    </table>
  );
};

ItemsTable.propTypes = {
  items: PropTypes.array.isRequired,
  editItemClick: PropTypes.func.isRequired,
  deleteItemClick: PropTypes.func.isRequired
};

export default ItemsTable;
