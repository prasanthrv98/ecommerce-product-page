import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {}, //add items to the cart
  clearItem: () => {}, //clear all the items in the cart
});

export default CartContext;
