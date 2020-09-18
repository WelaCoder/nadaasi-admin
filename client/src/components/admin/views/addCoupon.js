import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import axios from "axios";
// import { useIsAdmin } from '../hooks/useIsAdmin';
// import { setAuthorizationToken } from '../helpers/utils';
import { connect } from "react-redux";

import { createCoupon } from "../../../actions/coupon";
import Toggle from "react-toggle";
const AddCoupon = ({ createCoupon, coupon: { loading }, history }) => {
  // useIsAdmin();
  const [coupondata, setcoupondata] = useState({
    name: "",
    code: "",
    discount: "",
    discountType: "pi",
    isActive: true,
  });
  const { name, code, discount, discountType, isActive } = coupondata;
  // const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setisLoading] = useState(false);

  // const onSubmit = (data) => {
  //   setIsLoading(true);
  //   // setAuthorizationToken();
  //   axios
  //     .post("/coupon", data)
  //     .then((res) => {
  //       setIsLoading(false);
  //       toast.success(res.data.Message, {
  //         autoClose: "1500",
  //       });
  //       reset();
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       toast(err.response.data.Message, {
  //         autoClose: "1500",
  //       });
  //     });
  // };
  const onChange = (e) => {
    setcoupondata({
      ...coupondata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    // console.log({ name, code, value, discountType , isActive })
    createCoupon({ name, code, discount, discountType, isActive });
    setTimeout(() => {
      setisLoading(false);
      history.push('/');
    }, 700);
  };
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-info font-weight-bold py-2 border-top border-bottom ">
          Add Coupon
        </h3>

        <div className={"d-flex justify-content-center align-items-center"}>
          <span className={"mr-1"}>Active</span>{" "}
          <Toggle
            checked={isActive}
            onChange={(e) =>
              setcoupondata({ ...coupondata, isActive: e.target.checked })
            }
          />
        </div>
      </div>
      <form className="mt-4" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Coupon Name.."
          // ref={register({ required: true })}
          />

          {/* {name == '' && (
            <div className="font-weight-bold text-danger mt-1 mb-0">
              Name is Required.
            </div> */}
          {/* )} */}
        </div>
        <div className="form-group">
          <input
            type="text"
            required
            name="code"
            className="form-control"
            value={code}
            onChange={onChange}
            placeholder="Enter Coupon Code.."
          // ref={register({ required: true })}
          />
          <small className="text-muted">
            Please Enter A Unique Coupon Code.
          </small>
          {/* {code == '' && (
            <div className="font-weight-bold text-danger mt-1 mb-0">
              Code is Required.
            </div> */}
          {/* )} */}
        </div>

        <div className="form-group">
          <select
            className="form-control"
            name="discountType"
            value={discountType}
            onChange={onChange}
          >
            <option value="pi">Percentage off each Item</option>
            <option value="di">Dollar Amount off each Item </option>
            <option value="dst">Dollar Amount off Shipping Total </option>
            <option value="dt">Dollar amount off SubTotal</option>
            <option value="fs">Free Shipping</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            name="discount"
            className="form-control"
            required
            value={discount}
            onChange={onChange}
            placeholder="Enter Discount Value.."
          // ref={register({ required: true })}
          />
          {/* {value == ' ' && (
            <div className="font-weight-bold text-danger mt-1 mb-0">
              Discount Value is Required.
            </div>
          )} */}
        </div>

        <button
          type="submit"
          className="btn btn-block btn-dark mb-2"
          disabled={isLoading}
        >
          <span
            className={isLoading ? "mr-2 spinner-border spinner-border-sm" : ""}
            role="status"
            aria-hidden="true"
          ></span>
          {isLoading ? "Adding Coupon..." : "Add Coupon"}
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  coupon: state.coupon,
});
export default connect(mapStateToProps, { createCoupon })(AddCoupon);
