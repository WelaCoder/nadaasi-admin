import React from "react";
import { CartItem } from "./cart-item";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
// import { useCart } from 'react-use-cart';
const CartList = ({ cart }) => {
  // const { items, isEmpty } = useCart();

  if (cart == null) {
    return (
      <>
        {" "}
        <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
        <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
      </>
    );
  }
  if (cart == null || cart.length == 0) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-2 flex-column">
        <img
          src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"
          alt="empty"
          height="200px"
        />
        <span
          style={{
            marginTop: "-2rem",
          }}
          className="font-Futura-medium text-muted  py-1"
        >
          Your Cart Is Empty.
        </span>
      </div>
    );
  }

  if (cart != null) {
    return (
      <>
        {cart != null &&
          cart.length > 0 &&
          cart.map((item) => <CartItem key={item._id} item={item} />)}
      </>
    );
  }
  return <div></div>;
};
const mapStateToProps = (state) => ({
  cart: state.app.cart,
});
export default connect(mapStateToProps)(CartList);
