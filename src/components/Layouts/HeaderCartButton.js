import CartIcon from "../UI/Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
import React, { useContext, forwardRef } from "react";

const HeaderCartButton = forwardRef((props, ref) => {
  const cartCtx = useContext(CartContext);

  let isCartEmpty = true;

  if (cartCtx.items.amount >= 1) isCartEmpty = false;

  const cartBadge = (
    <div className={classes["cart-badge"]}>{cartCtx.items.amount}</div>
  );

  return (
    <div className={classes["icon-box"]} ref={ref}>
      <CartIcon />
      {!isCartEmpty && cartBadge}
    </div>
  );
});
export default HeaderCartButton;
