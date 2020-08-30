import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div className='d-flex h-80vh justify-content-center align-items-center'>
      <Spinner />
    </div>
  );
};
export default Loader;
