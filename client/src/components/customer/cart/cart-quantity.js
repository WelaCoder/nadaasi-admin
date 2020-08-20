import React from 'react';
import { useCart } from 'react-use-cart';

export const CartQuantity = ({ quantity, id }) => {
  const { updateItemQuantity } = useCart();

  console.log(quantity);
  return (
    <div className='form-group'>
      <input
        defaultValue={quantity}
        min={1}
        onChange={(e) => {
          const value =
            e.target.value === Number(0) ? 1 : Number(e.target.value);
          updateItemQuantity(id, value);
        }}
        type='number'
        className='form-control input-cart border-0 shadow-shop'
      />
    </div>
  );
};
