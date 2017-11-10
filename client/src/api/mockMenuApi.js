import delay from './delay';

const menu = {
  Pizza: {
    Size: [
      "Small",
      "Medium",
      "Large",
      "Extra Large"
    ],
    SizePrice: [
      6.99,
      9.99,
      12.99,
      15.99
    ],
    Toppings: [
      "Cheese",
      "Pepperoni",
      "Sausage",
      "Mushroom",
      "Pineapple"
    ],
    ToppingPrice: [
      2.00,
      1.00,
      1.50,
      1.00,
      1.50
    ],
    CrustOptions: {
      "Regular": 0.00,
      "Thin": 0.00,
      "Stuff": 1.00
    }
  },

  Sides: [
    {Name: "Cheese Sticks", Price: 4.99},
    {Name: "Cinnamon Bites", Price: 3.99}
  ],

  Drinks: {
    Type: [
      "Dr. Pepper",
      "Coca-cola",
      "Pepsi",
      "Iced Tea"
    ],
    Size: [
      "Small Cup",
      "Large Cup",
      "Small Bottle",
      "Large Bottle"
    ],
    SizePrice: [
      1.99,
      2.99,
      1.59,
      2.59
    ]
  }
}

class MenuApi {
  static getMenu() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, menu));
      }, delay);
    });
  }
}

export default MenuApi;
