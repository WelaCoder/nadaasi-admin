import React from 'react';

export const ShopItemHeading = ({ heading, spacing, spacingmobile }) => {
  const space = spacing ? 'ml-5' : '';
  const spacemb = spacingmobile ? 'ml-mb-5' : '';
  return (
    <>
      <h3 className={`font-Futura-light d-inline-block ${space} ${spacemb}`}>
        <span>{heading}</span>
        <hr className='hr-custom m-1' />
      </h3>
    </>
  );
};
