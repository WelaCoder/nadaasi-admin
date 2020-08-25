import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  Popover,
  FormControl,
  OverlayTrigger,
} from "react-bootstrap";

import logo from "../../../assets/images/nadaasi/Nadaasioriginal.png";
import UserLogo from "../../../assets/images/home/icons/user.svg";
import SearchLogo from "../../../assets/images/home/icons/search.svg";
import CartLogo from "../../../assets/images/home/icons/shopping-cart.svg";

import { LogOut } from "../../../actions/auth";

import { connect } from "react-redux";
// import { useCart } from "react-use-cart";
// import { useDispatch, useSelector } from "react-redux";

// import { logout, selectUser, isLoggedIn } from "../../features/user/userSlice";

const MyNavbar = ({ LogOut, auth: { isAuthenticated }, cart }) => {
  //   const { totalUniqueItems } = useCart();
  //   const dispatch = useDispatch();
  //   const { isAuthenticated } = useSelector(selectUser);
  //   useEffect(() => {
  //     dispatch(isLoggedIn());
  //   }, [dispatch]);

  return (
    <Navbar expand="lg" className="navbar" bsPrefix="navbar" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Brand href="#" className="logo">
        <img src={logo} alt="logo" width="200" />
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav className="menu">
          <NavLink className="menu-item" to="/" exact>
            Home
          </NavLink>
          <NavLink className="menu-item" to="/shop">
            Shop
          </NavLink>
          <NavLink className="menu-item" to="/about">
            About
          </NavLink>
          <NavLink className="menu-item" to="/contact">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="tools">
          {isAuthenticated ? (
            <butthon
              className="tool-item"
              onClick={() => {
                LogOut();
              }}
            >
              {"logout"}
            </butthon>
          ) : (
            <NavLink to="/user/sign-in">
              <span className="tool-item">
                <img src={UserLogo} alt="User" width="20" />
              </span>
            </NavLink>
          )}

          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id="popover-basic">
                <Popover.Content>
                  <FormControl placeholder="Search" />
                </Popover.Content>
              </Popover>
            }
          >
            <span className="tool-item cursor-pointer">
              <img alt="Search" src={SearchLogo} width="20" />
              Search
            </span>
          </OverlayTrigger>

          <NavLink to="/cart">
            <span className="tool-item">
              <img alt="Cart" src={CartLogo} width="20" />
              <span className="badge">
                {
                  cart != null && cart.length
                  //   totalUniqueItems
                }
              </span>
            </span>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  auth: state.app,
  cart: state.app.cart,
});
export default connect(mapStateToProps, { LogOut })(MyNavbar);
