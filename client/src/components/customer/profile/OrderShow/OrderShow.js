import React from "react";
import { connect } from "react-redux";
import Orders from "../Orders";
import Products from "./Products";

const OrderShow = ({ user }) => {
  let { currentOrder } = user;
  return (
    <div>
      <div
        class="cart-img d-flex justify-content-center 
 align-items-center font-Futura-bold"
      >
        {user.currentOrder != null && user.currentOrder && (
          <h1 class="letter-spacing-cart text-uppercase">Order</h1>
        )}
      </div>
      <div class="container" id={"orderContainer"}>
        <div class="mt-3 col-md-12">
          <div class="row">
            <div class="col p-0-mb">
              <nav aria-label="breadcrumb ">
                <ol class="breadcrumb  mb-2 bg-transparent font-Futura-light p-0">
                  <li class="breadcrumb-item">
                    <a class="text-muted" href="/">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a class="text-muted" href="/user">
                      User
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a class="text-muted" href="#!">
                      Order
                    </a>
                  </li>
                </ol>
              </nav>
              <h4 class="text-uppercase font-Futura-bold mr-3 letter-spacing-cart undefined">
                Products
              </h4>
              <Products />
            </div>
            <div class="shadow-shop mb-3 col-md-4">
              <h4 class="text-uppercase font-Futura-bold mr-3 letter-spacing-cart mt-3 mb-3">
                Order
              </h4>
              <form class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                <div class="row-wrap">
                  <div class="row mb-3">
                    <div class="col-md-6 p-0">ID</div>
                    <div class="col-md-6 p-0">
                      {currentOrder && currentOrder.orderId}
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6 p-0">TOTAL</div>
                    <div class="col-md-6 p-0">
                      $ {currentOrder && currentOrder.amount}
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6 p-0">STATUS</div>
                    <div class="col-md-6 p-0">
                      {currentOrder && currentOrder.status}
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6 p-0">COUNTRY</div>
                    <div class="col-md-6 p-0">
                      {currentOrder && currentOrder.country.name}
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6 p-0">ORDERED ON</div>
                    <div class="col-md-6 p-0">
                      {currentOrder &&
                        new Date(currentOrder.date).toDateString()}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.app,
});
export default connect(mapStateToProps)(OrderShow);
