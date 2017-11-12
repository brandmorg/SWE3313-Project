import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/orderActions';
import { Grid, Segment} from 'semantic-ui-react';

import PizzaForm from './newItem/PizzaForm';
import DrinkForm from "./newItem/DrinkForm";
import AddItemSelect from './newItem/AddItemSelect';

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
        ]
      },
      selectedCustomer: {},
      selectedItemType: "",
      selectedItem: {
        size: "",
        crust: "",
        flavor: "",
      },
      items: [],
      isDelivery: false,

    }

    this.updateSelectedItemState = this.updateSelectedItemState.bind(this);
    this.updateSelectedItemType = this.updateSelectedItemType.bind(this);
  }

  updateSelectedItemState = (e, { name, value}) => {
    let item = Object.assign({}, this.state.selectedItem);
    item[name] = value;
    return this.setState({selectedItem: item});
  };

  updateSelectedItemType = (e, {value}) => {
    return this.setState({selectedItemType: value});
  };


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
    const { pizzaMenu, drinkMenu, selectedItem, selectedItemType } = this.state;
    return (

      <Grid columns={2}>
        <Grid.Column>
          <Segment attached='top' className='blue inverted'>
            <h2>Test</h2>
          </Segment>
          <Segment attached>
            <h1>Table goes here</h1>
          </Segment>
          <Segment attached='bottom'>
            <AddItemSelect
              itemTypes={["Pizza", "Drink", "Side"]}
              selectedItemType={selectedItemType}
              onChange={this.updateSelectedItemType}/>

            <PizzaForm
              selectedItem={selectedItem}
              onChange={this.updateSelectedItemState}
              sizeOpts={Object.keys(pizzaMenu.sizes)}
              crustOpts={Object.keys(pizzaMenu.crusts)}
              toppingOpts={pizzaMenu.toppings}/>
            <DrinkForm
              selectedItem={selectedItem}
              onChange={this.updateSelectedItemState}
              sizeOpts={Object.keys(drinkMenu.sizes)}
              flavorOpts={drinkMenu.flavors}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>

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
