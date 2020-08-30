import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Col, Label, Alert } from "reactstrap";
import { Redirect } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
// import { setAuthorizationToken } from "../helpers/utils";

import  Loader from "../spinner";

import { connect } from 'react-redux';

import {adminLogin} from '../../../actions/adminauth'

const Login = ({adminLogin , adminauth : {isAuthenticate}}) => {
  const [ formdata, setformdata ] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;
  const onChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }
  if (isAuthenticate) {
    return<Redirect to="/admin/coupons" />
  }
  const onSubmit = (e) => {
    e.preventDefault();
    adminLogin({ email, password });
  }
  return (
    <div className="d-flex justify-content-center align-items-center h-100vh">
      <Col md={6} className="m-auto">
        {false ? (
          <Loader />
        ) : (
          <>
            {false && <Alert color="danger">Invalid Credentials.</Alert>}
            <img src={logo} alt="logo" width="100%" />
            <small className="text-right w-100 d-block px-2 font-weight-bold ">
              Admin
            </small>
            <Form className="mt-4" onSubmit={onSubmit}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  name='email'
                  value={email}
                  onChange={onChange}
                  placeholder="Enter Email Address"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                    type="password"
                    name='password'
                  placeholder="Enter Password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </FormGroup>
              <Input type="submit" value="Login" />
            </Form>
          </>
        )}
      </Col>
    </div>
  );
};
const mapStateToProps = state => ({
  adminauth : state.adminauth
})
export default connect(mapStateToProps , {adminLogin})(Login)