import React from "react";
import { connect } from "react-redux";
import { setFilters, filterProducts } from "../../../../actions/appActions";
import Skeleton from "react-loading-skeleton";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
const RangeFilter = ({
  loadingProducts,
  setFilters,
  filters,
  filterProducts,
}) => {
  return (
    <>
      {loadingProducts ? (
        <>
          <Skeleton count={1} />
          <div className="mt-3 mb-3">
            <Skeleton count={1} height="60px" />
          </div>
        </>
      ) : (
        <>
          <div className="filters__item__shop">
            <h3 className="filters__heading">Filter By Prices</h3>
            <Range
              min={0}
              max={3000}
              defaultValue={[filters.price.min, filters.price.max]}
              onChange={(value) => {
                setFilters({
                  price: {
                    min: value[0],
                    max: value[1],
                  },
                });
              }}
              trackStyle={[
                {
                  background: "#333",
                },
              ]}
            />
            <div className="d-flex justify-content-between align-items-end">
              <button
                onClick={
                  () => {
                    filterProducts();
                  }
                  //   setFilters({
                  //     type: "priceFilter",
                  //     value: range,
                  //   })
                }
                className="btn btn-sm btn-dark mt-3"
              >
                Filter
              </button>
              <span className="font-Futura-bold">
                ${filters.price.min}-${filters.price.max}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
  filters: state.app.filters,
});
export default connect(mapStateToProps, { setFilters, filterProducts })(
  RangeFilter
);
