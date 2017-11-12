import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const orders = [
  {
    CustomerID: "JohnSmith6781234567",
    Payment: {},
    Pizzas: [],
    Sides: [],
    Drinks: [],
    Total: 0
  },{
    CustomerID: "JoeBurns2781234567",
    Payment: {},
    Pizzas: [],
    Sides: [],
    Drinks: [],
    Total: 0
  },{
    CustomerID: "BobJones2781234567",
    Payment: {},
    Pizzas: [],
    Sides: [],
    Drinks: [],
    Total: 0
  },{
    CustomerID: "BillTurner5554447777",
    Payment: {},
    Pizzas: [],
    Sides: [],
    Drinks: [],
    Total: 0
  },{
    CustomerID: "JimBeauregard2223334444",
    Payment: {},
    Pizzas: [],
    Sides: [],
    Drinks: [],
    Total: 0
  }
];


class OrderApi {
  static getAllOrders() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], orders));
      }, delay);
    });
  }

  static saveOrder(order) {
    order = Object.assign({}, order); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orders.findIndex(a => a.id == order.id) !== -1) {
          const existingOrderIndex = orders.findIndex(a => a.id == order.id);
          orders.splice(existingOrderIndex, 1, order);
        } else {
          orders.push(order);
        }

        resolve(order);
      }, delay);
    });
  }

}

export default OrderApi;
