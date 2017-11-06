import React from 'react';

const ItemListRow = ({item}) => {
  return (
    <tr>
      <td>{this.props.key}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.totalPrice}</td>
      <td><button>Edit</button></td>
    </tr>
  );
};

export default ItemListRow;
