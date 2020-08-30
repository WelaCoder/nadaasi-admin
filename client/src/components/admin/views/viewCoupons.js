import React, { useEffect, useState } from "react";
// import axios from "axios";

import { Container } from "reactstrap";
// import { useIsAdmin } from "../hooks/useIsAdmin";
import  Loader  from "../spinner";
// import { setAuthorizationToken } from "../helpers/utils";
import NotFound from "../NotFound";
import Header from "../header";
import { connect } from "react-redux";
import CouponList from "../coupon/couponList";
import { getAllCoupons } from '../../../actions/coupon';
// export const stringTruncate = (str, length) => {
//   const dots = str.length > length ? "..." : "";
//   return `${str.substring(0, length)}${dots}`;
// };
const ViewCoupon = ({ getAllCoupons, coupon : {  coupons} }) => {
  // const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useIsAdmin();

  useEffect(() => {
    // setAuthorizationToken();
    // axios
    //   .get("/feedback")
    //   .then((res) => {
    //     setFeedback(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     setIsLoading(false);
    //   });
    getAllCoupons();

  }, []);

  return (
    <Container className="mt-4" fluid>
      <div className="col-md-12">
        {coupons.length === 0? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-md-10 container">
              <Header heading="Coupons" item={coupons} />
              <>
                {coupons.length > 0 ? (
                  <CouponList coupons={coupons} />
                ) : (
                  <NotFound message="No Feedback Added from the users." />
                )}
              </>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
const mapStateToProps = state => ({
  coupon : state.coupon
})
export default connect(mapStateToProps , {getAllCoupons})(ViewCoupon);  