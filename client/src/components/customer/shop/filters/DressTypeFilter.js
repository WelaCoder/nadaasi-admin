import React from "react";
import { connect } from "react-redux";
import { setFilters } from "../../../../actions/appActions";
import Skeleton from "react-loading-skeleton";
import Select from "react-select";
const DressTypeFilter = ({ loadingProducts, setFilters }) => {
  const dressTypeOptions = [
    {
      label: "All",
      value: null,
    },
    {
      label: "Casual",
      value: "casual",
    },
    {
      label: "Evening",
      value: "evening",
    },
  ];
  return (
    <>
      {loadingProducts ? (
        <>
          <Skeleton count={2} />
          <div className="mt-3 mb-3">
            <Skeleton count={1} height="50px" />
          </div>
        </>
      ) : (
        <div className="filters__item__shop">
          <h3 className="filters__heading">Dress Type</h3>
          <Select
            isClearable={true}
            options={dressTypeOptions}
            onChange={(option) => {
              console.log(option);
              setFilters({
                dressType: option?.value,
              });
            }}
          />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
});
export default connect(mapStateToProps, { setFilters })(DressTypeFilter);
