import React, { useState } from "react";
import Order from "../../../assets/images/Cart/order.svg";
import axios from "axios";

// import { useDispatch } from "react-redux";

// import { applyCoupon } from '../../features/product/productSlice';

export const Coupon = () => {
  const [coupon, setCoupon] = useState();

  const [applied, setApplied] = useState(false);

  const [error, setError] = useState(false);

  // const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/coupon/${coupon}`)
      .then((res) => {
        if (res.data.isActive) {
          setApplied(res.data);
          // dispatch(applyCoupon(res.data));
        } else {
          setError(res.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      {error && (
        <div className="alert alert-warning py-1 text-capitalize font-Futura-light d-flex align-items-center">
          <span role="img" aria-label="error" className="mr-2">
            ⚠️
          </span>{" "}
          <span>{error.Message}.</span>
        </div>
      )}
      {applied ? (
        <div className="alert alert-success py-1 text-capitalize font-Futura-light d-flex align-items-center">
          <span role="img" aria-label="tada" className="mr-2">
            🎉
          </span>{" "}
          <span>
            {applied.name} is applied with discount of ${applied.value}.
          </span>
        </div>
      ) : (
        <form onSubmit={onSubmit} class="input-group mb-3 col p-0">
          <div class="input-group-prepend">
            <span class="input-group-text border-0 bg-white black-border">
              <img src={Order} alt="order" width="34px" />
            </span>
          </div>

          <input
            type="text"
            class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
            placeholder="COUPON CODE"
            onChange={(e) => {
              setCoupon(e.target.value);
            }}
          />
          <div class="input-group-append">
            <button width="34px" className="btn btn-dark border-0">
              APPLY
            </button>
          </div>
        </form>
      )}
    </>
  );
};
