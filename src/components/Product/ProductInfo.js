import classes from "./ProductInfo.module.css";
import Actions from "../Cart/actions/Actions";

const ProductInfo = (props) => {
  const orginalPrice = (250).toFixed(2);
  const discount = 50;
  const discountPrice = (
    orginalPrice -
    (orginalPrice * discount) / 100
  ).toFixed(2);

  const cartItem = {
    brand: "sneaker Company",
    productName: "fall limited edition sneakers",
    productPrice: orginalPrice,
    productDiscountPrice: discountPrice,
    amount: 1,
  };

  return (
    <div className={classes["product__info"]}>
      <h3 className={classes["heading-tertiary"]}>sneaker company</h3>
      <h1 className={classes["heading-primary"]}>
        fall limited edition sneakers
      </h1>
      <p className={classes["product-text"]}>
        These low-profile sneakers are our perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={classes["product-price"]}>
        <span className={classes["discount-price"]}>{`$${discountPrice}`}</span>
        <span className={classes.discount}>{`${discount}%`}</span>
        <div className={classes["original-price"]}>{`$${orginalPrice}`}</div>
      </div>
      <div className={classes.actions}>
        {/* Actions has item btn and ADD btn */}
        <Actions itemInfo={cartItem} />
      </div>
    </div>
  );
};

export default ProductInfo;
