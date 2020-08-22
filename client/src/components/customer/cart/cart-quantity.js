import React from "react";
import { connect } from "react-redux";
import { updateCount } from "../../../actions/appActions";
const CartQuantity = ({ quantity, id, updateCount }) => {
  // const { updateItemQuantity } = useCart();
  console.log(quantity);
  return (
    <div className="form-group">
      <input
        defaultValue={quantity}
        min={1}
        onChange={async (e) => {
          const value =
            e.target.value === Number(0) ? 1 : Number(e.target.value);
          await updateCount(id, value);
          // updateItemQuantity(id, value);
        }}
        type="number"
        className="form-control input-cart border-0 shadow-shop"
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.app.cart,
});
export default connect(mapStateToProps, { updateCount })(CartQuantity);
