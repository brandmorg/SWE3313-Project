import React from 'react';
import PropTypes from 'prop-types';
import ItemsTable from './ItemsTable';

// Renders the items panel on ManageOrderPage
// Should also render the addItem forms

class OrderItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }
  num = "00012";

  render() {

    return (
      <div className="bg-light">
        <h2>Order #{this.num}</h2>
        <ItemsTable items={this.props.items} editItemClick={this.props.editItemClick} deleteItemClick={this.props.deleteItemClick}/>
      </div>
    );
  }
};

OrderItems.propTypes = {
  editItemClick: PropTypes.func.isRequired,
  deleteItemClick: PropTypes.func.isRequired
};

export default OrderItems;
