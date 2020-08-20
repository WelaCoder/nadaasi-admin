import React from "react";
import { CartItem } from "./cart-item";
// import { useCart } from 'react-use-cart';

export const CartList = () => {
  // const { items, isEmpty } = useCart();

  if (true)
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
  return (
    <>
      {/* {items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))} */}
    </>
  );
};
