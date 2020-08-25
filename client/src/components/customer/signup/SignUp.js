import React, { Fragment, useState, useEffect } from "react";

import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../../../config/toastConfig";
import { connect } from "react-redux";

import { signUp } from "../../../actions/auth";

const SignUp = ({ signUp, auth: { isAuthenticated } }) => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isloading, setisloading] = useState(false);
  const { firstname, lastname, email, password } = formdata;
  const onChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  if (isAuthenticated) {
    toast.success("Successfully Registered", toastConfig);
    return <Redirect to="/" />;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    signUp({ firstname, lastname, email, password });
    setTimeout(() => {
      setisloading(false);
    }, 700);
  };
  return (
    <Fragment>
      <div className="d-flex justify-content-center align-items-center font-Futura-light custom-height container">
        <div className="mx-auto col-md-6">
          <form className="" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="firstname"
                    placeholder="Enter Firstname"
                    required=""
                    value={firstname}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="lastname"
                    placeholder="Enter Lastname"
                    required
                    value={lastname}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                name="email"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={onChange}
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                placeholder="Enter Password"
                required
                value={password}
                onChange={onChange}
                type="password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-block btn-dark mb-2">
              <span
                className={
                  isloading ? "mr-2 spinner-border spinner-border-sm" : ""
                }
                role="status"
                aria-hidden="true"
              ></span>
              {isloading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-center w-100 font-Futura-medium">
              Already A Member?
              <Link to="/user/sign-in">Signin Here</Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.app,
});
export default connect(mapStateToProps, { signUp })(SignUp);
