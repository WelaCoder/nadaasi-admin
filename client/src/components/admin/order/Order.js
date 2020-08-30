import React from 'react';
import OrderItems from './OrderItems';
const   Order  = ({ Orders }) => {
  return (
    <>
      {Orders.map((order) => (
        <OrderItems key={order.id} order={order}/>
      ))}
    </>
  );
}
export default Order