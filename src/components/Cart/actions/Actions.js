import React, { useState, useContext, useRef } from "react";
import CartAddBtn from "./CartAddBtn";
import CartItemBtn from "./CartItemBtn";
import CartContext from "../../../store/CartContext";

const Actions = (props) => {
  const [cartAmt, setCartAmt] = useState(0);
  const [addBtnClicked, setAddBtnClicked] = useState(false);

  const cartCtx = useContext(CartContext);
  const itemInfo = props.itemInfo;

  const cartItemHandler = (amounts) => {
    setAddBtnClicked(false);
    setCartAmt(amounts);
  };

  const addCartHandler = () => {
    cartCtx.addItem({ ...itemInfo, amount: cartAmt });

    setAddBtnClicked(true);
  };

  return (
    <>
      <CartItemBtn onCartItem={cartItemHandler} onResetAmt={addBtnClicked} />
      <CartAddBtn onAddCart={addCartHandler} />
    </>
  );
};

export default Actions;
