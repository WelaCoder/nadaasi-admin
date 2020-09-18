import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "reactstrap";
import Loader from "../spinner";
import NotFound from "../NotFound";
import Header from "../header";
import Order from "../order/Order";
import OrderItems from "../order/OrderItems";
import { connect } from "react-redux";
import { loadDressTypes } from "../../../actions/appActions";
import SalesList from "../sales/SalesList";

const ViewOrders = ({ dressTypeOptions, loadDressTypes }) => {


  useEffect(() => {
    loadDressTypes();
  }, []);
  console.log(dressTypeOptions);
  return (
    <Container className="mt-4" fluid>
      <div className="col-md-12">
        {dressTypeOptions == null ? (
          <Loader />
        ) : (
            <div className="row">
              <div className="col-md-10 container ">
                <Header heading="Sales" item={dressTypeOptions} />
                <>
                  {dressTypeOptions.length > 0 ? (
                    // <Order Orders={dressTypeOptions} />
                    <SalesList sales={dressTypeOptions} />
                  ) : (
                      <NotFound message="No Sales Available..." />
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
  dressTypeOptions: state.app.dressTypeOptions,
});
export default connect(mapStateToProps, { loadDressTypes })(ViewOrders);
