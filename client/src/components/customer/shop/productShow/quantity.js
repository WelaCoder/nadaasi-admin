import React from "react";
import { connect } from "react-redux";
import { setChoosenProduct } from "../../../../actions/appActions";

const Quantity = ({ setChoosenProduct }) => {
  return (
    <div className="d-flex align-items-center justify-content-between font-Futura-light pt-3 pb-0">
      <h6>QUANTITY</h6>
      <div className="form-group">
        <input
          min="0"
          type="number"
          className="form-control input-cart border-0 shadow-shop"
          defaultValue={1}
          onChange={(e) =>
            setChoosenProduct({ quantity: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
});
export default connect(mapStateToProps, { setChoosenProduct })(Quantity);
