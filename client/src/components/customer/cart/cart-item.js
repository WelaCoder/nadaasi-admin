import React from "react";

import { CartHeading, CartItemName } from "./cart-heading";
import CartDelete from "./cart-delete";
import CartQuantity from "./cart-quantity";
import { CartImage } from "./cart-image";
import { Price } from "../utils/details";

export const CartItem = ({ item }) => {
  const { images, name, price } = item.product;
  const { quantity, _id } = item;
  console.log(item);
  return (
    <div className="cart-item d-flex py-3">
      <CartImage image={images[0]} />
      <div className="d-flex ml-3 flex-column justify-content-center w-100">
        <div className="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
          <CartItemName name={name} />
          <div className="d-flex align-items-center w-100-mb justify-content-between-mb">
            <CartHeading Heading="Quantity" />
            <CartQuantity quantity={quantity} id={_id} />
            <div
              className="d-none-mb d-flex align-items-center justify-content-center 
            ml-3 mb-3"
            >
              <CartDelete id={_id} />
            </div>
          </div>
        </div>
        <div
          className="font-Futura-medium  ml-0-mb d-flex 
        justify-content-between"
        >
          <Price currency="$" price={price * quantity} />
          <CartDelete showMobile />
        </div>
      </div>
    </div>
  );
};
