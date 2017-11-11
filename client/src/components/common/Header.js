import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav bg-light justify-content-center">
      <Link className="nav-link" to='/order'>New Order</Link>
      <Link className="nav-link" to='/'>Order Lookup</Link>
    </nav>
  );
};

/*
* ViewOpenOrders is the default home page/dashboard view
* This will display currently open orders as cards or a list
* with buttons to take payment, edit, cancel, and print receipts
* edit from this screen renders an order with the order's id
* same for print receipt
* same for take payment
* cancel marks the order as cancelled and removes it from state
* */

/*
* REDUX
*
* StartPage can just render a welcome message like
* "Click a link above to get started!"
*
* Links would be
*   Open Orders
*   Order Lookup
*   New Order
*   Receive Payment
*   Print Receipt
*
* Open Orders just prints a list of the open orders in the store
* Order Lookup prints a search form
* New Order renders the OrderPage with no props
*   NOTE
*     Almost every page would route back to OrderPage and populate it via props
*     Which can apparently be done with mapStateToProps()
* Receive Payment brings up a search box that only takes order numbers
*   The idea here is that the order should appear in the store/currently be open
* Print Receipt pulls up a search form which finds orders
*
*
* ManageOrderView
* Menu component
* buttons at the top which (from the user perspective) toggles between menu sections
* in reality, make these alter a state field
* which will be used to conditionally render different components
* such as
*   pizza form
*   drink add
*   sides
* */

export default Header;
