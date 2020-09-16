import React, { Fragment } from "react";
import Toggle from "react-toggle";
import { connect } from "react-redux";
import { updateCoupon } from "../../../actions/coupon";

const Coupon = ({ coupon, updateCoupon }) => {
  const { _id, name, code, discount, discountType, isActive } = coupon;
  const handleChange = (_id, status) => {
    const payload = {
      isActive: status,
    };
    updateCoupon(_id, payload);
  };

  return (
    <Fragment>
      <div className="d-flex list-group-item py-3  justify-content-between   shadow-sm  mb-2">
        <div className="col-md-2">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1">Name</span>
            <span className=" text-capitalize py-1">{name}</span>
          </small>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">Coupon Code</span>
            <span className="text-capitalize py-1">{code}</span>
          </small>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1">Coupon Type</span>
            <span className=" py-1">{discountType}</span>
          </small>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted py-1 border-bottom">Discount</span>
            <span className="py-1">{discount}</span>
          </small>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column">
            <span className="text-muted border-bottom py-1 ">Active</span>
            <span className="py-1">
              <Toggle
                id={_id}
                defaultChecked={isActive}
                onChange={() => {
                  handleChange(_id, !isActive);
                }}
              />
            </span>
          </small>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { updateCoupon })(Coupon);
