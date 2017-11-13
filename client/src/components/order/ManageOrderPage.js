import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/orderActions';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';

import PizzaForm from './newItem/PizzaForm';
import DrinkForm from "./newItem/DrinkForm";
import SideForm from './newItem/SideForm';
import AddItemSelect from './newItem/AddItemSelect';
import CustomerDataForm from '../customer/CustomerDataForm';
import CustomerSearchForm from "../customer/CustomerSearchForm";
import ItemsTable from "./ItemsTable";
import OrderSummary from "./OrderSummary";

// import { authorsFormattedForDropdown } from '../../selectors/selectors';
// import toastr from 'toastr';

/*
* MAJOR SUBCOMPONENTS/CHILDREN
*   - OrderItems **CONTAINER**
*     |--ItemsList
*     |  |--ItemsListRow
*     |--AddItemForm
*        |--{selection for item type}
*        |--PizzaForm
*        |--DrinkForm
*        |--SideForm
*
*   - CustomerPanel **CONTAINER**
*     |--CustomerSearchForm
*     |--ManageCustomerForm
*
*   - OrderActions
*     |--Order summary info
*     |--Buttons for stuffs
*   */

class ManageOrderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaMenu: {
        sizes: {
          small: 6.99,
          medium: 9.99,
          large: 12.99
        },
        crusts: {
          thin: 0,
          regular: 0,
          stuffed: 1
        },
        toppings: [
          "Pepperoni",
          "Sausage",
          "Anchovy",
          "Olives",
          "Mushroom",
          "Pineapple",
          "Bacon",
          "Cheese",
          "Turds",
          "Roadkill",
          "Rabbit",
          "Squirrel"
        ],
      },
      drinkMenu: {
        sizes: {
          small: 1.59,
          medium: 1.99,
          large: 2.59
        },
        flavors: [
          "Coke",
          "Diet Coke",
          "Sprite",
          "Dr. Pepper",
          "Sweet Tea",
          "Unsweet Tea"
        ],
      },
      sideMenu: {
        cinnamonBites: 3.99,
        cheeseSticks: 4.99
      },
      customerSearchField: '',
      customerSearchValue: '',
      selectedCustomer: {},
      customer: {
        ID: -1,
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: ""
      },
      selectedItemType: null,
      itemTypes: {
        Pizza: null,
        Drink: null,
        Side: null
      },
      selectedItem: {
        size: "",
        crust: "",
        flavor: "",
        price: 0.00
      },
      items: [],
      isDelivery: false,
      orderID: null
    };

    this.updateSelectedItemState = this.updateSelectedItemState.bind(this);
    this.updateSelectedItemType = this.updateSelectedItemType.bind(this);
    this.cancelSelectedItem = this.cancelSelectedItem.bind(this);
    this.updateCustomerSearchField = this.updateCustomerSearchField.bind(this);
    this.updateCustomerSearchValue = this.updateCustomerSearchValue.bind(this);
    this.populateEmptyCustomer = this.populateEmptyCustomer.bind(this);
    this.bindCustomerData = this.bindCustomerData.bind(this);
  }

  updateSelectedItemState = (e, { name, value}) => {
    let item = Object.assign({}, this.state.selectedItem);
    item[name] = value;
    return this.setState({selectedItem: item});
  };

  updateSelectedItemType = (e, {value}) => {
    return this.setState({selectedItemType: value});
  };

  updateCustomerSearchField = (e, {value}) => {
    return this.setState({customerSearchField: value});
  };

  updateCustomerSearchValue = (e, {value}) => {
    return this.setState({customerSearchValue: value});
  };

  cancelSelectedItem = () => {
    return this.setState({selectedItemType: null});
  };

  populateEmptyCustomer = () => {
    return this.setState({selectedCustomer: {
      ID: -1,
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    }});
  };

  bindCustomerData = (e, {name, value}) => {
    let customer = Object.assign({}, this.state.selectedCustomer);
    customer[name] = value;
    return this.setState({selectedCustomer: customer});
  };

  componentWillMount() {
    let itemTypes = {
      Pizza: <PizzaForm
        selectedItem={this.state.selectedItem}
        onChange={this.updateSelectedItemState}
        sizes={Object.keys(this.state.pizzaMenu.sizes)}
        crusts={Object.keys(this.state.pizzaMenu.crusts)}
        toppings={this.state.pizzaMenu.toppings}
        cancelClick={this.cancelSelectedItem}/>,
      Drink: <DrinkForm
        selectedItem={this.state.selectedItem}
        onChange={this.updateSelectedItemState}
        sizes={Object.keys(this.state.drinkMenu.sizes)}
        flavors={this.state.drinkMenu.flavors}
        cancelClick={this.cancelSelectedItem}/>,
      Side: <SideForm
        selectedItem={this.state.selectedItem}
        onChange={this.updateSelectedItemState}
        sides={Object.keys(this.state.sideMenu)}
        cancelClick={this.cancelSelectedItem}/>,
    };
    return this.setState({ itemTypes: itemTypes });
  }


  // updateCustomerInfo(event) {
  //   const field = event.target.name;
  //   let customer = Object.assign({}, this.state.order.customer);
  //   customer[field] = event.target.value;
  //   return this.setState({customer: customer});
  // }
  //
  // updateOrderItems(event) {
  //   const field = event.target.name;
  //   let item = Object.assign({}, this.state.selectedItem);
  //   item[field] = event.target.value;
  //
  // }


  /*
  * New render() {
  *   return (
  *     <main className="container py-2">
  *       <div className="row">
  *         <Panel width="6">
  *           <OrderItems />
  *         </Panel>
  *         <Panel width="6">
  *           <CustomerPanel />
  *           <OrderActions />
  *         </Panel>
  *       </div>
  *     </main>
  *   );
  * }*/
  render() {
    const { selectedItemType, itemTypes, selectedCustomer, customerSearchField, customerSearchValue } = this.state;
    return (

      <Grid columns={2}>
        <Grid.Column width={10}>
          <Header size='huge' attached='top'>
            { this.state.orderID ?
              'Order #' + this.state.orderID :
              'New Order' }
          </Header>
          <ItemsTable/>
          <Segment attached='bottom'>
            <Grid verticalAlign='middle' centered>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header textAlign='right'>Add New {selectedItemType}</Header>
                </Grid.Column>
                <Grid.Column >
                  <AddItemSelect
                    itemTypes={["", "Pizza", "Drink", "Side"]}
                    selectedItemType={selectedItemType}
                    onChange={this.updateSelectedItemType}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  {itemTypes[selectedItemType]}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header size='huge' attached='top'>
            { selectedCustomer.hasOwnProperty('firstName') ?
              selectedCustomer.firstName + " " + selectedCustomer.lastName :
            'Add customer below'}</Header>
          <Segment attached>
            {selectedCustomer.hasOwnProperty('firstName') ?
              <CustomerDataForm customer={selectedCustomer} bindData={this.bindCustomerData}/> :
              <CustomerSearchForm addNewClick={this.populateEmptyCustomer}
                                  searchValue={customerSearchValue}
                                  searchField={customerSearchField}
                                  onFieldChange={this.updateCustomerSearchField}
                                  onValueChange={this.updateCustomerSearchValue}/>}
          </Segment>
          <OrderSummary/>
        </Grid.Column>
      </Grid>
    );
  }
}

ManageOrderPage.propTypes = {
  selectedOrder: PropTypes.object
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
