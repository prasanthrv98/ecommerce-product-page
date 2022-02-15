import classes from "./CartAddBtn.module.css";

const CartCheckoutBtn = (props) => {
  return (
    <button className={`${classes["checkout-btn"]} ${classes.btn}`}>
      Checkout
    </button>
  );
};

export default CartCheckoutBtn;
