import React, { useContext, forwardRef } from "react";
import CartContext from "../../store/CartContext";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";

const Cart = forwardRef((props, ref) => {
  const cartCtx = useContext(CartContext);

  const cartInfo = {
    items: cartCtx.items,
    totalPrice: cartCtx.totalAmount,
  };

  const isEmpty =
    cartCtx.items.amount === 0 || cartCtx.items.length === 0 ? true : false;

  const emptyCartMsg = (
    <p className={classes["empty-msg"]}>Your cart is empty.</p>
  );

  const clearCartHandler = (event) => {
    cartCtx.clearItem();
  };

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes["cart-title"]}>
        <h3>Cart</h3>
      </div>
      <div className={classes["cart-item"]}>
        {isEmpty && emptyCartMsg}
        {!isEmpty && (
          <CartItems cartInfo={cartInfo} onClearCart={clearCartHandler} />
        )}
      </div>
    </div>
  );
});
export default Cart;
