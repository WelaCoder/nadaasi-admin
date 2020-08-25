import React from "react";
import { connect } from "react-redux";
import Orders from "./Orders";

const Profile = ({ user }) => {
  return (
    <div>
      <div
        class="cart-img d-flex justify-content-center 
 align-items-center font-Futura-bold"
      >
        {user && (
          <h1 class="letter-spacing-cart text-uppercase">{user.firstname}</h1>
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
                    <a class="text-muted" href="/shop">
                      Shop
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    <a class="text-dark font-weight-bold" href="/user">
                      Profile
                    </a>
                  </li>
                </ol>
              </nav>
              <h4 class="text-uppercase font-Futura-bold mr-3 letter-spacing-cart undefined">
                Orders
              </h4>
              <Orders />
            </div>
            <div class=" mb-3 col-md-4">
              <div class={"shadow-shop p-3"}>
                <h4 class="text-uppercase font-Futura-bold mr-3 letter-spacing-cart mt-3 mb-3">
                  Personal Info
                </h4>
                <form class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">FIRSTNAME</div>
                      <div class="col-md-6 p-0">{user && user.firstname}</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">LASTNAME</div>
                      <div class="col-md-6 p-0">{user && user.firstname}</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">EMAIL</div>
                      <div class="col-md-6 p-0">{user && user.email}</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">MEMBER SINCE</div>
                      <div class="col-md-6 p-0">
                        {user && new Date(user.date).toDateString()}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.app.user,
});
export default connect(mapStateToProps)(Profile);
