import React from "react";
// import { useCoupons } from "../hooks/useCoupons";
// import { useIsAdmin } from "../hooks/useIsAdmin";
// import { setAuthorizationToken } from "../helpers/utils";
import { Loader } from "../spinner";
import NotFound from "../NotFound";
import Header from "../header";
import CouponList from "../coupon/couponList";

export const ViewCoupon = () => {
  // setAuthorizationToken();
  // useIsAdmin();
  // const { coupons, isLoading } =
  //  useCoupons();
  const coupons = [];
  const isLoading = false;
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="col-md-12 mx-auto  py-4">
          <div className="row">
            <Header heading="Coupons" item={coupons} />
            {coupons.length > 0 ? (
              <CouponList coupons={coupons} />
            ) : (
              <NotFound message="No Active Coupons." />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
