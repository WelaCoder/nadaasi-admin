import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "reactstrap";
// import { useIsAdmin } from "../hooks/useIsAdmin";
import Loader from "../spinner";
// import { setAuthorizationToken } from "../helpers/utils";
import NotFound from "../NotFound";
import Header from "../header";
import Order from "../order/Order";
import OrderItems from "../order/OrderItems";
import { getAllAdminOrders } from "../../../actions/adminOrder";
import { connect } from "react-redux";
// import { getOrder } from '../../../actions/orders';
// export const stringTruncate = (str, length) => {
//   const dots = str.length > length ? "..." : "";
//   return `${str.substring(0, length)}${dots}`;
// };
const ViewOrders = ({ order: { adminOrder }, getAllAdminOrders }) => {
  // const [feedback, setFeedback] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useIsAdmin();

  useEffect(() => {
    getAllAdminOrders();
  }, []);
  console.log(adminOrder);
  return (
    <Container className="mt-4" fluid>
      <div className="col-md-12">
        {adminOrder == null ? (
          <Loader />
        ) : (
            <div className="row">
              <div className="col-md-10 container ">
                <Header heading="Orders" item={adminOrder} />
                <>
                  {adminOrder.length > 0 ? (
                    <Order Orders={adminOrder} />
                  ) : (
                      <NotFound message="No Orders Placed Yet..." />
                    )}
                </>
              </div>
            </div>
          )}
        {/* <OrderItems/> */}
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  order: state.adminOrder,
});
export default connect(mapStateToProps, { getAllAdminOrders })(ViewOrders);
