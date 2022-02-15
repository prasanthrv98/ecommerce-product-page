import React, { useEffect, useState } from "react";

import classes from "./CartItemBtn.module.css";

const CartItemBtn = (props) => {
  const [cartAmt, setCartAmt] = useState(0);

  props.onCartItem(cartAmt);

  const itemAddHandler = () => {
    setCartAmt((prevState) => {
      return prevState + 1;
    });
  };

  const itemRemoveHandler = () => {
    setCartAmt((prevState) => {
      if (prevState <= 0) return 0;
      return prevState - 1;
    });
  };

  // reset the cart amount
  useEffect(() => {
    if (props.onResetAmt) setCartAmt(0);
  }, [props.onResetAmt]);

  return (
    <div className={classes["item-btn"]}>
      <button onClick={itemRemoveHandler}>-</button>
      {cartAmt}
      <button onClick={itemAddHandler}>+</button>
    </div>
  );
};

export default CartItemBtn;
