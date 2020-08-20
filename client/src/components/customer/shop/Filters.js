import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "react-select";
// import {
//   FETCH_PRODUCTS,
//   setFilters,
//   selectProduct,
// } from "../features/product/productSlice";
// import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const Filters = ({ children }) => <div className="filters">{children}</div>;

export const useSetFilter = (currentFilter) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setFilters(currentFilter));
  // }, [currentFilter, dispatch]);
  return { currentFilter };
};

const useFetchProduct = ({ type }) => {
  // const dispatch = useDispatch();
  // const {
  //   product: { filters },
  // } = useSelector(selectProduct);
  // useEffect(() => {
  //   if (filters?.[type]) {
  //     dispatch(FETCH_PRODUCTS(0, 9, filters));
  //   }
  // }, [filters, type, dispatch]);
};

const dressTypeOptions = [
  {
    label: "Casual",
    value: "casual",
  },
  {
    label: "Evening",
    value: "evening",
  },
];

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

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const DressType = () => {
  const [filter, setFilter] = useState({});

  const { currentFilter } = useSetFilter(filter);
  // const { isLoading } = useSelector((state) => state.product);
  const isLoading = false;
  useFetchProduct(currentFilter);

  return (
    <>
      {isLoading ? (
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
              setFilter({
                type: "dressType",
                value: option?.value || "all",
              });
            }}
          />
        </div>
      )}
    </>
  );
};

export const FilterSizes = () => {
  const [filter, setFilter] = useState([]);
  // const { isLoading } = useSelector((state) => state.product);
  const isLoading = false;

  const handleFilterSize = (values) => {
    const sizes = values !== null ? values.map((option) => option.value) : [];
    setFilter({
      type: "size",
      value: sizes,
    });
  };

  const { currentFilter } = useSetFilter(filter);

  useFetchProduct(currentFilter);

  return (
    <>
      {isLoading ? (
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

Filters.Colors = ({ colors }) => (
  <div className="filters__item">
    <div className="filters__colors">
      {colors.map((color) => (
        <span
          key={color}
          style={{
            backgroundColor: color,
          }}
          className="filters__color"
        />
      ))}
    </div>
  </div>
);

export const RangeFilter = () => {
  const [range, setRange] = useState([10, 3000]);

  const [filter, setFilter] = useState("");

  const { currentFilter } = useSetFilter(filter);

  // const { isLoading } = useSelector((state) => state.product);
  const isLoading = false;

  useFetchProduct(currentFilter);

  return (
    <>
      {isLoading ? (
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
              defaultValue={range}
              onChange={(value) => {
                setRange(value);
              }}
              trackStyle={[
                {
                  background: "#333",
                },
              ]}
            />
            <div className="d-flex justify-content-between align-items-end">
              <button
                onClick={() =>
                  setFilter({
                    type: "priceFilter",
                    value: range,
                  })
                }
                className="btn btn-sm btn-dark mt-3"
              >
                Filter
              </button>
              <span className="font-Futura-bold">
                ${range[0]}-${range[1]}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const FindYourOwnStyle = () => {
  // const [range, setRange] = useState([10, 3000]);

  // const [filter, setFilter] = useState("");

  // const { currentFilter } = useSetFilter(filter);

  // const { isLoading } = useSelector((state) => state.product);
  const isLoading = false;
  const [showModal, setShowModal] = useState(false);
  // useFetchProduct(currentFilter);

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton count={1} />
          <div className="mt-3 mb-3">
            <Skeleton count={1} height="60px" />
          </div>
        </>
      ) : (
        <>
          <div
            id={"findStyleBtn"}
            class="shadow-shop cursor-pointer mt-3 mb-0 py-2 text-center text-uppercase  font-Futura-bold "
            onClick={() => setShowModal(true)}
          >
            <div>Find your own style </div>
          </div>
          {showModal && (
            <div
              role="dialog"
              aria-modal="true"
              class="fade font-Futura-light modal show"
              tabindex="-1"
              style={{ display: "block" }}
            >
              <div role="document" class="modal-dialog">
                <div class="modal-content" style={{ backgroundColor: "#ffff" }}>
                  <div class="modal-header">
                    <div class="modal-title h4">Find Your Style</div>
                    <button
                      type="button"
                      class="close"
                      onClick={() => setShowModal(false)}
                    >
                      <span aria-hidden="true">×</span>
                      <span class="sr-only">Close</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="">
                      <div class="col-sm-12">
                        <div class="d-flex align-items-center justify-content-center row">
                          <div class="col-md-3">Bust</div>
                          <div class="col-md-9">
                            <div class="mt-2 mb-0 form-group">
                              <input
                                name="bust"
                                placeholder="Enter Bust Size"
                                type="number"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center row">
                          <div class="col-md-3">Waist</div>
                          <div class="col-md-9">
                            <div class="mt-2 mb-0 form-group">
                              <input
                                name="waist"
                                placeholder="Enter Waist Size"
                                type="number"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center row">
                          <div class="col-md-3">High-Hip</div>
                          <div class="col-md-9">
                            <div class="mt-2 mb-0 form-group">
                              <input
                                name="highhip"
                                placeholder="Enter High-hip Size"
                                type="number"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center row">
                          <div class="col-md-3">Hip</div>
                          <div class="col-md-9">
                            <div class="mt-2 mb-0 form-group">
                              <input
                                name="hip"
                                placeholder="Enter Hip Size"
                                type="number"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <button
                            type="submit"
                            class="mt-3 btn btn-dark btn-block"
                          >
                            Find Your Style
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

Filters.ProductSort = () => (
  <div className="filters__item filters__item--sort">
    <p>Display</p>
    <div className="filters__sort">
      <p>Sort By</p>
    </div>
  </div>
);

Filters.propTypes = {
  children: PropTypes.node.isRequired,
};

Filters.Colors.defaultProps = {
  colors: ["red", "green", "blue"],
};

Filters.Colors.propTypes = {
  colors: PropTypes.instanceOf(Array),
};

export default Filters;
