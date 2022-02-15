import CartContext from "./CartContext";
import React, { useReducer } from "react";

const defaultCartState = {
  items: { amount: 0 },
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  // add item to the value of cartcontext
  if (action.type === "ADD") {
    const updatedItems = {
      ...action.item,
      amount: prevState.items.amount + action.item.amount,
    };
    const updatedTotalAmt =
      action.item.amount * action.item.productDiscountPrice;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmt.toFixed(2),
    };
  }

  // clear all the items in the cart
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const clearItemHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartInfo = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    clearItem: clearItemHandler,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
