import React from "react";
import { connect } from "react-redux";
import Toggle from "react-toggle";
import { Link } from "react-router-dom";
import { captureOrder } from "../../../actions/adminOrder";
const OrderItems = ({ order, captureOrder }) => {
  const { _id, orderId, name, date, subject, email, message, status } = order;
  return (
    <>

      <div
        className="d-flex list-group-item py-3 
  justify-content-between  
  shadow-sm  mb-2"
      // key={_id}
      >

        <div className="col-md-2">
          <Link to={`/admin/orders/${_id}`} style={{ color: "black" }}>
            <small className="d-flex flex-column">
              <span className="text-muted border-bottom py-1">Order Id</span>
              <span className=" text-capitalize py-1">{orderId} </span>
            </small>
          </Link>
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1 ">Email</span>
            <span className="text-capitalize py-1">{email}</span>
          </small>
        </div>
        <div className="col-md-3">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1">Placed On</span>
            <span className=" py-1">{new Date(date).toDateString()}</span>
          </small>
          <br />
        </div>
        <div className="col-md-2">
          <small className="d-flex flex-column ">
            <span className="text-muted border-bottom py-1">Status</span>
            <span className=" py-1">{status}</span>
          </small>
        </div>
        <div className="col-md-1">
          <small className="d-flex flex-column ">
            <span className="text-muted py-1 border-bottom">Shipped</span>
            <span className="py-3">
              <Toggle
                // id={_id}
                defaultChecked={status != "Awaiting"}

                onChange={() => {
                  captureOrder(_id);
                }}
              />
            </span>
          </small>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { captureOrder })(OrderItems);
