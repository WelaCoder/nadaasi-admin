import React from "react";
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

const Customer = () => {
  return (
    <div>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Customer;
