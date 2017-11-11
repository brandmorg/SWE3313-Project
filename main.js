//Node Packages
var firebase = require('firebase-admin');
var serviceAccount = require('service-account.json');

const express = require('express');
const expApp = express();

var datetime = require('node-datetime');





//Init Firebase
var fireApp = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://swe-pos.firebaseio.com"
});

var dbRootRef = firebase.database().ref();

var customers = new Array();
dbRootRef.child('customers').on('value', function(parentSnap) {
  var index = 0;
  parentSnap.forEach(function(chilSnap) {
    customers[index] = chilSnap.val();
    index++;
  });
  console.log("Customer list received from database.");
});

var transactions = new Array();
dbRootRef.child('transactions').on('value', function(parentSnap) {
  var index = 0;
  parentSnap.forEach(function(chilSnap) {
    transactions[index] = chilSnap.val();
    index++;
  });
  console.log("Transaction list received from database.");
});





//Init Express
expApp.get('/menu/', (req, res) => GetMenu(req, res));
expApp.post('/get_customer/', (req, res) => GetCustomer(req, res));
expApp.post('/get_customer_all/', (req, res) => GetCustomerAll(req, res));
expApp.post('/set_customer/', (req, res) => SetCustomer(req, res));
expApp.post('/get_transaction/', (req, res) => GetTransaction(req, res));
expApp.post('/get_transaction_all/', (req, res) => GetTransactionAll(req, res));
expApp.post('/set_transaction/', (req, res) => SetTransaction(req, res));
expApp.listen(3001, () => console.log('App listening on port 3000.'));

function ExpressGetCommand(req, res) {
  res.send(menu);
}

function ExpressSetCommand(req, res) {
  res.send(menu);
}





//Preference
var taxMultiplier = 1.05;
var receiptValueOffset = 31;

var menu = {
  Pizza: {
    Size: ["Small", "Medium", "Large", "Extra Large"],
    SizePrice: [6.99, 9.99, 12.99, 15.99],
    Topping: ["Extra cheese", "Pepperoni", "Sausage"],
    ToppingPrice: [2.00, 1.00, 1.50]
  },

  Side: [
    {Name: "Cheese Sticks", Price: 4.99},
    {Name: "Cinnamon Bites", Price: 3.99}
  ],

  Drink: {
    Type: ["Dr. Pepper", "Coca-Cola", "Pepsi", "Iced Tea"],
    Size: ["Small Cup", "Large Cup", "Small Bottle", "Large Bottle"],
    SizePrice: [1.99, 2.99, 1.59, 2.59]
  }
}





//Rest API Methods
function GetMenu(req, res) {
  res.send(menu);
}

function GetCustomer(req, res) {
  var data = {
    FirstName: "Ada"
  }

  var send = new Array();
  for (var i = 0; i < customers.length; i++) {
    var pass = true;
    if (data.FirstName != null && customers[i].FirstName != data.FirstName)
      pass = false;
    if (data.LastName != null && customers[i].LastName != data.LastName)
      pass = false;
    if (data.PhoneNumber != null && customers[i].PhoneNumber != data.PhoneNumber)
      pass = false;
    if (pass)
      send[send.length] = customers[i];
  }
  res.send(send);
}

function GetCustomerAll(req, res) {
  res.send(customers);
}

function SetCustomer(req, res) {
  var data = {
    FirstName: "Jenneveve",
    LastName: "Lovelance",
    PhoneNumber: 1337,
  }

  if (data.FirstName == null || data.LastName == null || data.PhoneNumber == null) {
    //%RETURN_ERROR%
    return;
  }

  data.FirstName = data.FirstName.toLowerCase();
  data.LastName = data.LastName.toLowerCase();

  var id = data.FirstName + data.LastName + data.PhoneNumber;
  data.Id = id;

  dbRootRef.child('customers/' + id).set(data)
    .then(function(snapshot) {
      res.send(id);
    });
}

function GetTransaction(req, res) {
  var data = {
    TransactionId: "-KyVXpZf7yBCIHDn4ZMn"
  };
  if (data.CustomerID != null)
    data.CustomerID = data.CustomerID.toLowerCase();

  var send = new Array();

  if (data.TransactionId != null) {
    var promise = dbRootRef.child('transactions/' + data.CustomerID).once('value');
    promise.then(function(snapshot) {
      if (snapshot.val() != null) {
        send[0] = snapshot.val();
        res.send(send);
      } else {
        res.send(send);
      }
    });
    promise.catch(function() {
      res.send(send);
      console.log("GetTransaction promise fail");
    });
  } else if (data.CustomerID != null) {
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].CustomerID == data.CustomerID)
        send[send.length] = transactions[i];
    }
    res.send(send);
  }
}

function GetTransactionAll(req, res) {
  res.send(transactions);
}

function SetTransaction(req, res) {
  var data = {
    CustomerID: "AdaLovelance1337",
    Transaction: {
      PaymentMethod: "Credit"
    },
    Pizza: [
      {Size: 0, Topping: [0, 1, 2]},
      {Size: 3, Topping: [1]}
    ],
    Side: [0, 0, 1],
    Drink: [
      {Size: 1, Type: 0}
    ]
  }

  if (!IsOrderValid(data)) {
    //%RETURN_ERROR%
    console.log("Order not valid");
    return;
  }

  data.Total = GetTotal(data, true);

  var promise = dbRootRef.child('transactions').push(data);
  promise.then(function(snapshot) {
    var transactionComplete = {
      Id: snapshot.key,
      Receipt: GetReceipt(data)
    }
    console.log(GetReceipt(data, snapshot.key));
    res.send(transactionComplete);
  });
  promise.catch(function() {
    //Send failure
    console.log("SetTransaction promise fail");
  });
}





//Other Methods
function IsOrderValid(o) {
  if (o.CustomerID == null)
    return false;
  if (o.Pizza == null)
    return false;
  if (o.Side == null)
    return false;
  if (o.Drink == null)
    return false;

  for (var i = 0; i < o.Pizza.length; i++) {
    if (o.Pizza[i].Size == null)
      return false;
    if (o.Pizza[i].Topping == null)
      return false;
  }

  for (var i = 0; i < o.Drink.length; i++) {
    if (o.Drink[i].Type == null)
      return false;
    if (o.Drink[i].Size == null)
      return false;
  }

  return true;
}

function GetTotal(o, useTax) {
  var total = 0;

  for (var i = 0; i < o.Pizza.length; i++) {
    total += menu.Pizza.SizePrice[o.Pizza[i].Size];
    for (var j = 0; j < o.Pizza[i].Topping.length; j++)
      total += menu.Pizza.ToppingPrice[o.Pizza[i].Topping[j]];
  }

  for (var i = 0; i < o.Side.length; i++)
    total += menu.Side[o.Side[i]].Price;

  for (var i = 0; i < o.Drink.length; i++)
    total += menu.Drink.SizePrice[o.Drink[i].Size];

  if (useTax)
    return (Math.round(total * taxMultiplier * 100) / 100);
  return (Math.round(total * 100) / 100);
}

function GetReceipt(o, id) {
  var dt = datetime.create().format('Y-m-d H:M:S');

  var s = "--------------Mom & Pop--------------\n-------------Pizza Place-------------\n";
  s += "DATE/TIME:        " + dt + "\n\nORDER:\n";
  var line = "";

  for (var i = 0; i < o.Pizza.length; i++) {
    line = "Pizza [" + menu.Pizza.Size[o.Pizza[i].Size] + "]";
    s += LogNumber(line, menu.Pizza.SizePrice[o.Pizza[i].Size])
    for (var j = 0; j < o.Pizza[i].Topping.length; j++) {
      line = "    * " + menu.Pizza.Topping[o.Pizza[i].Topping[j]];
      s += LogNumber(line, menu.Pizza.ToppingPrice[o.Pizza[i].Topping[j]]);
    }
  }

  for (var i = 0; i < o.Side.length; i++) {
    line = menu.Side[o.Side[i]].Name;
    s += LogNumber(line, menu.Side[o.Side[i]].Price);
  }

  for (var i = 0; i < o.Drink.length; i++) {
    line = menu.Drink.Type[o.Drink[i].Type] + " [" + menu.Drink.Size[o.Drink[i].Size] + "]";
    s += LogNumber(line, menu.Drink.SizePrice[o.Drink[i].Size]);
  }

  s += "\n";
  line = "TOTAL (before tax):";
  s += LogNumber(line, GetTotal(o, false));
  line = "TOTAL (after tax):";
  s += LogNumber(line, GetTotal(o, true));

  if (o.Transaction.PaymentMethod == "Credit") {
    s += "\nSignature: __________________________\n";
  }

  s += "\n-------------------------------------\n"
  s += "Transaction ID:  " + id + "\n";

  return s;
}

function LogNumber(line, num) {
  var s = "";
  for (var p = 0; p < receiptValueOffset - line.length; p++)
    s += " ";
  var nums = "" + num;
  if (num < 10)
    s += " ";
  if (num < 100)
    s += " ";
  if (nums.includes('.')) {
    var data = nums.split('.');
    if (data[1].length == 1)
      nums += "0";
  } else {
    nums += ".00";
  }
  return line + s + nums + "\n";
}
