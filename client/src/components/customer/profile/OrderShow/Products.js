import React, { useEffect } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { setCurrentOrder } from "../../../../actions/orders";
import { useParams, useLocation } from "react-router-dom";
const Orders = ({ currentOrder, setCurrentOrder }) => {
  const params = useParams();
  useEffect(() => {
    console.log("object");
    setCurrentOrder(params.id);
  }, []);
  return (
    <>
      {currentOrder == null ? (
        <>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
        </>
      ) : (
        currentOrder.products.map((o) => (
          <div class="cart-item d-flex py-3" key={o._id}>
            <div class="cart-item-img shadow-shop">
              <img class="img-full" src="/uploads/1598002208606.jpeg" alt="" />
            </div>
            <div
              class="d-flex ml-3 flex-column justify-content-center w-100  p-3"
              // onClick={() => getOrder(o.orderId)}
            >
              <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                <h5 class="">{o.details.name}</h5>
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
                <h6 class=" mb-0">
                  <span class="mr-1">Size:</span>
                  <span>{o.size}</span>
                </h6>
              </div>
              <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                <h6 class=" mb-0">
                  <span class="mr-1">Quantity:</span>
                  <span>{o.quantity}</span>
                </h6>
              </div>
              <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                <h6 class=" mb-0">
                  <span class="mr-1">Price: </span>
                  <span>{o.details.price}</span>
                </h6>
              </div>
              <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                <h6 class="font-weight-bold mb-0">
                  <span class="mr-1">SUBTOTAL: </span>
                  <span>{Number(o.quantity) * Number(o.details.price)}</span>
                </h6>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentOrder: state.app.currentOrder,
});
export default connect(mapStateToProps, { setCurrentOrder })(Orders);
