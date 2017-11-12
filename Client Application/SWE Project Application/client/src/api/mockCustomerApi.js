import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    ID: "JohnSmith6781234567",
    FirstName: "John",
    LastName: "Smith",
    PhoneNumber: "6781234567",
    Address: "123 Main St, New York, NY, 11111",
    Information: ""
  },
  {
    ID: "JoeBurns2781234567",
    FirstName: "Joe",
    LastName: "Burns",
    PhoneNumber: "6781234569",
    Address: "",
    Information: ""
  },
  {
    ID: "BobJones2781234567",
    FirstName: "Bob",
    LastName: "Jones",
    PhoneNumber: "2781234567",
    Address: "444 Poop Lp, New York, NY, 11111",
    Information: ""
  },
  {
    ID: "BillTurner5554447777",
    FirstName: "Bill",
    LastName: "Turner",
    PhoneNumber: "5554447777",
    Address: "12 Lost Ln, New York, NY, 11111",
    Information: ""
  },
  {
    ID: "JimBeauregard2223334444",
    FirstName: "Jim",
    LastName: "Beauregard",
    PhoneNumber: "2223334444",
    Address: "223 Rifle Dr, New York, NY, 11111",
    Information: ""
  },
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (customer) => {
  let Id = "";
  Id += customer.FirstName + customer.LastName + customer.PhoneNumber;
  return Id;
};

class CustomerApi {
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
    customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (customer.id) {
          const existingCustomerIndex = customers.findIndex(a => a.id === customer.id);
          customers.splice(existingCustomerIndex, 1, customer);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new customers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          customer.id = generateId(customer);
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

}

export default CustomerApi;
