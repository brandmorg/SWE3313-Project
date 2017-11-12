import React from 'react';
import PropTypes from 'prop-types';

const ItemsTableRow = ({item, rowNumber, editClick, deleteClick}) => {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>
        <span className="btn-group-sm">
        <button
          className="btn btn-primary btn-sm"
          onClick={editClick}>
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={deleteClick}>
          Delete
        </button>
        </span>
      </td>
    </tr>
  );
};

ItemsTableRow.propTypes = {
  item: PropTypes.object.isRequired,
  rowNumber: PropTypes.number.isRequired,
  editClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

export default ItemsTableRow;
