import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../spinner";
import { setCurrentOrder, loadOrders } from "../../../actions/orders";
import { useParams } from "react-router-dom";
import { setCurrentReturn } from "../../../actions/return";
const ReturnShow = ({ currentReturn, loadOrders, setCurrentReturn }) => {
    let params = useParams();
    useEffect(() => {
        setCurrentReturn(params.id);
    }, []);

    if (currentReturn == null) return <Loader />;
    const {
        _id,
        name,
        orderId,
        email,
        problem,
        isResolved,
        phone
    } = currentReturn;
    return (
        <div>
            {" "}
            <div
                className="w-100 d-flex 
              justify-content-between 
              align-items-center border-top 
              border-bottom py-1 mb-2"
            >
                <h3 className="mb-0 font-weight-bold text-info">Return Request</h3>
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
                        <div class="col-md-5">Name</div>
                        <div class="col-md-7">{name}</div>
                    </div>
                    <div class="row py-2 text-muted border-bottom">
                        <div class="col-md-5">Order Id</div>
                        <div class="col-md-7">{orderId}</div>
                    </div>
                    <div class="row py-2 text-muted border-bottom">
                        <div class="col-md-5">Email</div>
                        <div class="col-md-7">{email}</div>
                    </div>
                    <div class="row py-2 text-muted border-bottom">
                        <div class="col-md-5">Problem</div>
                        <div class="col-md-7">{problem}</div>
                    </div>
                    <div class="row py-2 text-muted border-bottom">
                        <div class="col-md-5">Phone</div>
                        <div class="col-md-7">{phone}</div>
                    </div>


                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentReturn: state.app.currentReturn,
});
export default connect(mapStateToProps, { loadOrders, setCurrentReturn })(
    ReturnShow
);
