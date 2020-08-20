import React from 'react';

export const ContactBanner = ({ heading, subheading }) => {
  return (
    <div className='contact-img d-flex justify-content-center align-items-center flex-column'>
      <h1 className='font-Futura-medium text-white'>{heading}</h1>
      <h5 className='font-Futura-medium text-white'>{subheading}</h5>
    </div>
  );
};
