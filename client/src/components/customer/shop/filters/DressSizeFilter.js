import React from "react";
import { connect } from "react-redux";
import { setFilters } from "../../../../actions/appActions";
import Skeleton from "react-loading-skeleton";
import Select from "react-select";
const DressSizeFilter = ({ loadingProducts, setFilters }) => {
  const sizeOptions = [
    {
      label: "XS",
      value: "XS",
    },
    {
      label: "SM",
      value: "SM",
    },
    {
      label: "MD",
      value: "M",
    },
    {
      label: "LG",
      value: "L",
    },
    {
      label: "XL",
      value: "XL",
    },
  ];
  const handleFilterSize = (values) => {
    const sizes = values !== null ? values.map((option) => option.value) : [];
    // setFilter({
    //   type: "size",
    //   value: sizes,
    // });

    setFilters({
      size: sizes.length == 0 ? null : sizes,
    });
  };
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
        <div className="filters__item__shop">
          <h3 className="filters__heading">Filter by size</h3>
          <div className="form-group">
            <Select
              isMulti
              isClearable={true}
              options={sizeOptions}
              onChange={(options) => handleFilterSize(options)}
            />
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
});
export default connect(mapStateToProps, { setFilters })(DressSizeFilter);
