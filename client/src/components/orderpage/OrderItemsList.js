import React from 'react';

const OrderItemsList = ({items}) => {
  return (
    <table className="ui very basic table">
      <thead>
        <tr>
          <th>&num;</th>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      {items.map( (item, index) =>
        <ItemListRow key={index} item={item}/>
      )}
      </tbody>
    </table>
  );
};

export default OrderItemsList;
