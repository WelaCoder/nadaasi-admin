import React, { useState } from "react";
import Logo from "../../assets/images/logo-white.png";
import { NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Toggle from "react-toggle";
import FeatherIcon from "feather-icons-react";
import { connect } from "react-redux";
import { adminLogOut } from '../../actions/adminauth'

const Appbar = ({ adminLogOut }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="h-100vh">
      <ProSidebar collapsed={isOpen}>
        <Menu>
          <div className="ml-3">
            <Toggle
              id="navbar"
              defaultChecked={!isOpen}
              onChange={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>

          <MenuItem>
            <NavLink
              activeClassName="text-dark font-weight-bold "
              tag={RRNavLink}
              to="/admin/coupons"
            >
              <img
                className="ml-2"
                src={Logo}
                alt="Nadaasi Logo"
                width="90px"
              />{" "}
              <span className="text-white ml-1">Admin</span>
            </NavLink>
          </MenuItem>
          <SubMenu title="Coupons" icon={<FeatherIcon icon="gift" />}>
            <MenuItem>
              {" "}
              <NavLink

                activeClassName="text-light font-weight-bold "
                tag={RRNavLink}
                to="/admin/coupons"
              >
                Coupons
                </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink

                activeClassName="text-light font-weight-bold "
                tag={RRNavLink}
                to="/admin/add-coupon"
              >
                Add Coupons
                </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Products" icon={<FeatherIcon icon="package" />}>
            <MenuItem>
              <NavLink

                activeClassName="text-light font-weight-bold "
                tag={RRNavLink}
                to="/admin/upload-product"
              >
                Add Product
                </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink

                activeClassName="text-light font-weight-bold "
                tag={RRNavLink}
                to="/admin/products"
              >
                Products
                </NavLink>
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<FeatherIcon icon="truck" />}>
            <NavLink

              activeClassName="text-light font-weight-bold "
              tag={RRNavLink}
              to="/admin/orders"
            >
              Orders
              </NavLink>
          </MenuItem>
          <MenuItem icon={<FeatherIcon icon="shopping-bag" />}>
            <NavLink

              activeClassName="text-light font-weight-bold "
              tag={RRNavLink}
              to="/admin/sales"
            >
              Sales
              </NavLink>
          </MenuItem>
          <MenuItem icon={<FeatherIcon icon="clipboard" />}>
            <NavLink

              activeClassName="text-light font-weight-bold "
              tag={RRNavLink}
              to="/admin/feedback"
            >
              Feedback
              </NavLink>
          </MenuItem>
          <MenuItem icon={<FeatherIcon icon="file-minus" />}>
            <NavLink

              activeClassName="text-light font-weight-bold "
              tag={RRNavLink}
              to="/admin/merchant"
            >
              Return Request
              </NavLink>
          </MenuItem>
          <MenuItem icon={<FeatherIcon icon="log-out" />}>
            <NavItem>
              <NavLink
                onClick={() => {
                  adminLogOut();
                }}

              >
                Log out
                </NavLink>
            </NavItem>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default connect(null, { adminLogOut })(Appbar);
