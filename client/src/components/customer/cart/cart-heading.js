import React from 'react';

export const CartHeading = ({ Heading, className }) => {
  return (
    <h4
      className={`text-uppercase font-Futura-bold mr-3 letter-spacing-cart ${className}`}
    >
      {Heading}
    </h4>
  );
};

export const CartItemName = ({ name }) => {
  return <h3 className='cart-h3'>{name}</h3>;
};
