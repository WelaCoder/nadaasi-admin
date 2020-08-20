import React from "react";
import Delete from "../../../assets/images/Cart/delete.svg";
import { useCart } from "react-use-cart";

export const CartDelete = ({ showMobile, id }) => {
  const { removeItem } = useCart();
  const show = showMobile ? "d-mb " : "";
  return (
    <img
      className={`${show} cursor-pointer`}
      width="17px"
      onClick={() => removeItem(id)}
      src={Delete}
      alt="delete"
    />
  );
};
