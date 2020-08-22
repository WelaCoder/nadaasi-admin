import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { setFilters } from "../../../actions/appActions";
import DressTypeFilter from "./filters/DressTypeFilter";
import RangeFilter from "./filters/RangeFilter";
import FilterSizes from "./filters/DressSizeFilter";
const Filters = ({ loadingProducts, filters, setFilters }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const FindYourOwnStyle = () => {
    const isLoading = false;
    const [showModal, setShowModal] = useState(false);

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
                  <div
                    class="modal-content"
                    style={{ backgroundColor: "#ffff" }}
                  >
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
  return (
    <div className="filters">
      <DressTypeFilter />
      <FilterSizes />
      <RangeFilter />
      <FindYourOwnStyle />
    </div>
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
const mapStateToProps = (state) => ({
  filters: state.app.filters,
  loadingProducts: state.app.loadingProducts,
});
export default connect(mapStateToProps, { setFilters })(Filters);
