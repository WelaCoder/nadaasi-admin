import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../spinner";
import { setCurrentOrder, loadOrders } from "../../../actions/orders";
import { useParams } from "react-router-dom";
import Products from "./Products";
const OrderShow = ({ currentOrder, loadOrders, setCurrentOrder }) => {
  let params = useParams();
  useEffect(() => {
    loadOrders();
    setCurrentOrder(params.id);
  }, []);

  if (currentOrder == null) return <Loader />;
  return (
    <div>
      {" "}
      <div
        className="w-100 d-flex 
              justify-content-between 
              align-items-center border-top 
              border-bottom py-1 mb-2"
      >
        <h3 className="mb-0 font-weight-bold text-info">Order</h3>
        {/* <span className='badge badge-info badge-pill shadow-sm p-2'>
        Totals {heading}: {item.length}
      </span> */}
      </div>
      <div
        className="d-flex list-group-item py-3 
justify-content-between  
shadow-sm  mb-2"
        // key={_id}
      >
        <div class="col-md-8 row-wrap mb-3">
          {/* <h3 class="d-flex flex-column ">
            <span>Product Details</span>
          </h3> */}
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Order ID</div>
            <div class="col-md-7">{currentOrder._id}</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Country</div>
            <div class="col-md-7">{currentOrder.country.name}</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Town</div>
            <div class="col-md-7">{currentOrder.town}</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Address</div>
            <div class="col-md-7">{currentOrder.address}</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Message</div>
            <div class="col-md-7">{currentOrder.message}</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Shipping</div>
            <div class="col-md-7">
              {currentOrder.shipping == "standard" ? "Standard" : "Fast"}
            </div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Total Amount</div>
            <div class="col-md-7">{currentOrder.amount}</div>
          </div>

          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Balance Used</div>
            <div class="col-md-7">{currentOrder.balanceDiscount}</div>
          </div>
          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Coupon Discount</div>
            <div class="col-md-7">{currentOrder.discount || 0}</div>
          </div>

          <div class="row py-2 text-muted border-bottom">
            <div class="col-md-5">Ordered On</div>
            <div class="col-md-7">
              {new Date(currentOrder.date).toDateString()}
            </div>
          </div>
        </div>
      </div>
      <Products products={currentOrder.products} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentOrder: state.app.currentOrder,
});
export default connect(mapStateToProps, { loadOrders, setCurrentOrder })(
  OrderShow
);
