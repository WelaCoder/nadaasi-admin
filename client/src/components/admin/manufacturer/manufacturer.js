import React, { Fragment } from "react";
import { connect } from "react-redux";

const Coupon = ({ coupon }) => {
  const { name, email, } = coupon;


  return (
    <Fragment>
      <div className="d-flex list-group-item py-3  justify-content-between   shadow-sm  mb-2">
        <div className="col-md-6">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1">Name</span>
            <span className=" text-capitalize py-1">{name}</span>
          </small>
        </div>
        <div className="col-md-6">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">Email</span>
            <span className="py-1">{email}</span>
          </small>
        </div>

      </div>
    </Fragment>
  );
};

export default connect(null)(Coupon);
