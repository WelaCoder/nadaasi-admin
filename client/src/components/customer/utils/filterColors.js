import React from "react";
import { connect } from "react-redux";
import { setChoosenProduct } from "../../../actions/appActions";
const FilterColors = ({
  currentProduct,
  choosenProduct,
  setChoosenProduct,
}) => {
  const FilterColor = ({ color }) => {
    const isActive =
      choosenProduct?.color === color ? "border border-primary" : "";
    return (
      <span
        className={`filters__color ml-2 cursor-pointer ${isActive}`}
        onClick={() => {
          setChoosenProduct({ color });
          // dispatch(setColor(color));
        }}
        style={{ backgroundColor: color }}
      ></span>
    );
  };
  var colors = [];
  return (
    <div className="d-flex align-items-end font-Futura-light ">
      <div className="filters w-100 d-flex justify-content-between align-items-center">
        <h6 className="mb-0 font-Futura-light">COLOR</h6>
        <div className="filters__item d-flex ml-4">
          {currentProduct?.dressColor?.map((color) => (
            <FilterColor key={color} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
  choosenProduct: state.app.choosenProduct,
});
export default connect(mapStateToProps, { setChoosenProduct })(FilterColors);
