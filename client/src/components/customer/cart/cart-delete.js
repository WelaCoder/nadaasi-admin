import React from "react";
import Delete from "../../../assets/images/Cart/delete.svg";
// import { useCart } from "react-use-cart";
import { connect } from "react-redux";
import { deleteItemFromCart } from "../../../actions/appActions";
const CartDelete = ({ showMobile, id, deleteItemFromCart }) => {
  // const { removeItem } = useCart();
  const show = showMobile ? "d-mb " : "";
  return (
    <img
      className={`${show} cursor-pointer`}
      width="17px"
      onClick={() => deleteItemFromCart(id)}
      src={Delete}
      alt="delete"
    />
  );
};

export default connect(null, { deleteItemFromCart })(CartDelete);
