import React, { useState } from "react";
import { Form, FormGroup, Col, Container } from "react-bootstrap";
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
import { connect } from "react-redux";
// import { setUser, selectUser } from '../features/user/userSlice';
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../../../config/toastConfig";

import { login } from "../../../actions/auth";

const UserSignin = ({ login, auth }) => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [isloading, setisloading] = useState(false);
  const { email, password } = formdata;
  if (
    auth.isAuthenticated
    // false
  ) {
    return <Redirect to="/" />;
  }
  const onChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    login({ email, password });
    setTimeout(() => {
      setisloading(false);
    }, 700);
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center font-Futura-light custom-height">
        <Col md={6} className="mx-auto">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Form.Control
                type="email"
                // ref={register}
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter Email Address"
              />
            </FormGroup>
            <FormGroup>
              <Form.Control
                type="password"
                // ref={register}
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter Password"
              />
            </FormGroup>
            <button
              type="submit"
              className="btn btn-block btn-dark mb-2"
              disabled={isloading}
            >
              <span
                className={
                  isloading ? "mr-2 spinner-border spinner-border-sm" : ""
                }
                role="status"
                aria-hidden="true"
              ></span>
              {isloading ? "Logging In..." : "Signin"}
            </button>
            <div className="text-center w-100 font-Futura-medium">
              Not A Member? <Link to="/user/sign-up">Signup Here</Link>
            </div>
          </Form>
        </Col>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.app,
});
export default connect(mapStateToProps, { login })(UserSignin);
