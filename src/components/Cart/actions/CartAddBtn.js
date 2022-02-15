import classes from "./CartAddBtn.module.css";
import CartIcon from "../../UI/Icons/CartIcon";
import React, { useRef } from "react";

const CartAddBtn = (props) => {
  return (
    <button
      className={`${classes["add-btn"]} ${classes.btn}`}
      onClick={props.onAddCart}
    >
      <CartIcon classes={classes["fill-white"]} />
      <span>Add to cart</span>
    </button>
  );
};

export default CartAddBtn;
