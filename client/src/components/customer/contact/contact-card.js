import React from 'react';

export const ContactCard = ({ img, heading, text }) => {
  return (
    <div className='row mt-3 mb-5 row-card'>
      <div className='col-md-4 shadow-contact-card p-0'>
        <div className='d-flex justify-content-end align-items-center flex-column p-3'>
          <img src={img} width='50px' alt={heading} />
          <h4 className='mt-1 mb-0 contact-h4'>{heading}</h4>
        </div>
      </div>
      <div className='col ml-3  px-0 shadow-contact-card d-flex justify-content-center align-items-center'>
        <p className=' font-Futura-light  text-left px-3 py-3'>{text}</p>
      </div>
    </div>
  );
};
