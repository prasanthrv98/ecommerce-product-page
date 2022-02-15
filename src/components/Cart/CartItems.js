import classes from "./CartItems.module.css";
import productImg from "../../assets/image-product-1-thumbnail.jpg";
import DeleteIcon from "../UI/Icons/DeleteIcon";
import CartCheckoutBtn from "./actions/CartCheckoutBtn";

const CartItems = (props) => {
  const name = props.cartInfo.items.productName;
  const discountPrice = props.cartInfo.items.productDiscountPrice;
  const amount = props.cartInfo.items.amount;
  const totalPrice = `$${props.cartInfo.totalPrice}`;

  const productDetails = (
    <div className={classes["product__info"]}>
      <p className={classes["product-name"]}>{name}</p>
      <div className={classes["product-pricing"]}>
        <span>{discountPrice}</span> &times;
        <span> {amount} </span>
        <span> {totalPrice} </span>
      </div>
    </div>
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes["row-1"]}>
          <div className={classes["img-box"]}>
            <img src={productImg} alt="" />
          </div>
          {productDetails}
          <DeleteIcon
            classes={classes["delete-icon"]}
            onClick={props.onClearCart}
          />
        </div>
        <div className="row-2">
          <CartCheckoutBtn />
        </div>
      </div>
    </>
  );
};

export default CartItems;
