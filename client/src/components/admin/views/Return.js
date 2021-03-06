import React, { useEffect } from "react";
import { Container } from "reactstrap";
// import { useCoupons } from "../hooks/useCoupons";
// import { useIsAdmin } from "../hooks/useIsAdmin";
// import { setAuthorizationToken } from "../helpers/utils";
import Loader from "../spinner";
import NotFound from "../NotFound";
import Header from "../header";
import ReturnList from "../return/ReturnList";
import { merchantRequest } from "../../../actions/return";
import { connect } from "react-redux";

const Return = ({
  merchantRequest,
  merchantReturn: { loading, returnRequest },
}) => {
  useEffect(() => {
    merchantRequest();
  }, []);
  // setAuthorizationToken();
  // useIsAdmin();
  // const { coupons, isLoading } =
  //  useCoupons();

  return (
    <Container className="mt-4" fluid>
      <div className="col-md-12">
        {returnRequest == null ? (
          <Loader />
        ) : (
            <div className="row">
              <div className="col-md-12 container ">
                <Header heading="Return Requests" item={returnRequest} />
                {returnRequest.length > 0 ? (
                  <ReturnList returnItems={returnRequest} />
                ) : (
                    <NotFound message="No Return Requests Yet." />
                  )}
              </div>
            </div>
          )}
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  merchantReturn: state.MerchantReturn,
});
export default connect(mapStateToProps, { merchantRequest })(Return);
