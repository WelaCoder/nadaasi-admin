import React, { useEffect } from "react";
import HomePage from "./home/homepage";
import ContactPage from "./contact/ContactPage";
import AboutPage from "./about/AboutPage";
import CartPage from "./cart/CartPage";
import ShopPage from "./shop/ShopPage";
import MyNavbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { connect } from "react-redux";
import ProductShow from "./shop/productShow/ProductShow";
import { ToastContainer, toast } from "react-toastify";
import { loadCart } from "../../actions/appActions";

const Customer = ({ toastMessage, loadCart }) => {
  loadCart();
  useEffect(() => {
    if (toastMessage != null) {
      if (toastMessage.type == "error") {
        toast.error(toastMessage.message);
      } else if (toastMessage.type == "success") {
        toast.success(toastMessage.message);
      } else if (toastMessage.type == "info") {
        toast.info(toastMessage.message);
      }
    }
  }, [toastMessage]);
  return (
    <div>
      <ToastContainer />
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/shop" component={ShopPage} />

        <Route exact path="/shop-item/:id" component={ProductShow} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  toastMessage: state.app.toastMessage,
});
export default connect(mapStateToProps, { loadCart })(Customer);
