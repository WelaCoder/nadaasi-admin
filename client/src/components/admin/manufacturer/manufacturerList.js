import React from 'react';
import Manufacturer from './manufacturer';
export default function ManufacturerList({ manufacturers }) {
  return (
    <>
      {manufacturers.map((manufacturer) => (
        <Manufacturer key={manufacturer._id} coupon={manufacturer} />
      ))}
    </>
  );
}
