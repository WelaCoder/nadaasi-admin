import React from "react";

export const CartImage = ({ image }) => {
  return (
    <div className="cart-item-img shadow-shop">
      <img className="img-full" src={`/uploads/${image}`} alt="" />
    </div>
  );
};
