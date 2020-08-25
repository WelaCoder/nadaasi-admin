import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { setCurrentOrder } from "../../../actions/orders";
import { withRouter } from "react-router-dom";
const Orders = ({ orders, setCurrentOrder, history }) => {
  return (
    <>
      {orders == null ? (
        <>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
        </>
      ) : (
        orders.map((o) => (
          <div class="cart-item d-flex py-3" key={o._id}>
            <div
              class="d-flex ml-3 flex-column justify-content-center w-100 shadow-shop p-3"
              onClick={() => history.push(`/order/${o._id}`)}
            >
              <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                <h5 class="">Order # {o.orderId}</h5>
                <div class="d-flex align-items-center w-100-mb justify-content-between-mb">
                  <div class="d-none-mb d-flex align-items-center justify-content-center  ml-3 mb-3">
                    {/* <img
                      class=" cursor-pointer"
                      width="17px"
                      src="/static/media/delete.650cdc57.svg"
                      alt="delete"
                    /> */}
                  </div>
                </div>
              </div>
              <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                <h6 class="font-weight-bold mb-0">
                  <span class="mr-1">$</span>
                  <span>{o.amount}</span>
                </h6>
                {/* <img
                  class="d-mb  cursor-pointer"
                  width="17px"
                  src="/static/media/delete.650cdc57.svg"
                  alt="delete"
                /> */}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.app.orders,
});
export default connect(mapStateToProps, { setCurrentOrder })(
  withRouter(Orders)
);
