import React from 'react';
import Coupon from './coupon';
export default function FeedbackList({ coupons }) {
  return (
    <>
      {coupons.map((coupon) => (
        <Coupon key={coupon._id} coupon={coupon} />
      ))}
    </>
  );
}
