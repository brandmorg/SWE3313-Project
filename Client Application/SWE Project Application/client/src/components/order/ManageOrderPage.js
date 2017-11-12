import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/orderActions';
import OrderItems from './OrderItems';
import OrderSummary from "./OrderSummary";

// import PizzaForm from './PizzaForm';
// import DrinkForm from './DrinkForm';

// import { authorsFormattedForDropdown } from '../../selectors/selectors';
// import toastr from 'toastr';

/*
* Container component for managing an order
*
* State needs
*   -Order object
*   -addItem
*
*
* Actions
*   SubmitOrder
*   SubmitPayment
*   PrintReceipt?
*
* Handlers
*   */

class ManageOrderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: Object.assign({}, props.selectedOrder),
      AddItem: null,
    }
  }

  onItemEdit() {
    console.log('onEdit called');
  }

  onItemDelete() {
    console.log('onDelete called');
  }

  render() {
    const testItems = [
      {
        name: "Sm Pizza",
        price: 6.99
      },
      {
        name: "Lrg Coca-cola",
        price: 2.59
      },
      {
        name: "Cinnamon Bites",
        price: 3.99
      }
    ];

    return (
      <main className="container py-2 px-0">
        <div className="row">
          <OrderItems items={testItems} editItemClick={this.onItemEdit()} deleteItemClick={this.onItemDelete()}/>
          <OrderSummary/>
        </div>
      </main>
    );
  }
}

ManageOrderPage.propTypes = {
  selectedOrder: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  // use ownProps.match.params to populate this view with an existing order from state
  // need to determine how we select said order
  // maybe a lookup form?
  return {
    selectedOrder: state.selectedOrder
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrderPage);
