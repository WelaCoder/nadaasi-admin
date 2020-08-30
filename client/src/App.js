import React from "react";
import "./App.css";
import "./assets/styles/about.css";
import "./assets/styles/banner.css";
import "./assets/styles/buttons.css";
import "./assets/styles/carousel.css";
import "./assets/styles/cart.css";
import "./assets/styles/contact.css";
import "./assets/styles/filters.css";
import "./assets/styles/fonts.css";
import "./assets/styles/footer.css";
import "./assets/styles/index.css";
import "./assets/styles/navbar.css";
import "./assets/styles/sections.css";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import HomePage from "./components/customer/home/homepage";
import ContactPage from "./components/customer/contact/ContactPage";
import AboutPage from "./components/customer/about/AboutPage";
import CartPage from "./components/customer/cart/CartPage";
import ShopPage from "./components/customer/shop/ShopPage";
import MyNavbar from "./components/customer/layout/Navbar";
import Footer from "./components/customer/layout/Footer";
import Customer from "./components/customer/Customer";
import Admin  from "./components/admin/Admin";
// Redux Setup
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Customer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
