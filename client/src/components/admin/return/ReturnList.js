import React from 'react';
import  ReturnItem  from './ReturnItem';

const CouponList = ({ returnItems }) =>
  returnItems.map((returnRequest) => <ReturnItem key={returnRequest._id} returnRequest={returnRequest} />);

export default CouponList;