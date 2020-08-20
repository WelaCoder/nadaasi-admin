import React from 'react';
import { Form } from 'react-bootstrap';

export const NewsLetter = () => {
  return (
    <div className='font-Futura-light'>
      <Form.Group>
        <Form.Check type='checkbox' label='Subscribe to our newsletter' />
      </Form.Group>
    </div>
  );
};
