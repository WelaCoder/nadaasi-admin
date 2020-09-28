import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ViewOrders from "./views/viewOrders";
import ViewCoupon from "./views/viewCoupons";
import AddCoupon from "./views/addCoupon";
import ViewProducts from "./views/viewProduct";
import { UploadProduct } from "./views/uploadProduct";
import Feedback from "./views/feedback";
import { Users } from "./views/users";
import Login from "./views/login";
import Appbar from "./Navbar.js";
import { ToastContainer } from "react-toastify";
import setAuthToken from "../../utils/setAuthToken";
import { getAdmin } from "../../actions/adminauth";
import Return from "./views/Return";
import PrivateRoute from "../../routing/PrivateRoute";
import { connect } from "react-redux";
import Loader from "./spinner";
import OrderShow from "./order/OrderShow";
import ProductShow from "./product/ProductShow";
import viewSales from "./views/viewSales";
import addManufacturer from "./views/addManufacturer";
import ViewManufacturers from "./views/ViewManufacturers";

const Admin = ({ getAdmin, adminauth }) => {
  if (localStorage.token && adminauth.isAdmin) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      {adminauth.isloading ? (
        <Loader />
      ) : (
          <>
            <ToastContainer />
            <div className="container-fluid p-0 overflow-hidden">
              <div className="d-flex">
                <div>{adminauth.isAuthenticate && <Appbar />}</div>
                <div className="main">
                  <Switch>
                    <Route exact path="/admin" component={Login} />
                    <PrivateRoute exact path="/admin/users" component={Users} />
                    <PrivateRoute
                      exact
                      path="/admin/feedback"
                      component={Feedback}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/upload-product"
                      component={UploadProduct}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/coupons"
                      component={ViewCoupon}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/products"
                      component={ViewProducts}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/products/:id"
                      component={ProductShow}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/merchant"
                      component={Return}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/add-coupon"
                      component={AddCoupon}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/add-manufacturer"
                      component={addManufacturer}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/manufacturers"
                      component={ViewManufacturers}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/orders"
                      component={ViewOrders}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/sales"
                      component={viewSales}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/orders/:id"
                      component={OrderShow}
                    />
                    <Route path="*" component={() => <Redirect to="/admin" />} />
                  </Switch>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
};
const mapStateToProps = (state) => ({
  adminauth: state.adminauth,
});

export default connect(mapStateToProps, { getAdmin })(Admin);
