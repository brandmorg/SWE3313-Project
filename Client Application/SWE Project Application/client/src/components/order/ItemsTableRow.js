import React from 'react';
import PropTypes from 'prop-types';

const ItemsTableRow = ({item, rowNumber, editClick, deleteClick}) => {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <button
          className="btn btn-info"
          onClick={editClick}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteClick}>
          Delete
        </button>
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
