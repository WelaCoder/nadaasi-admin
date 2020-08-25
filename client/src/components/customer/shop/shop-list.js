import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { ShopItem } from "./shop-item";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
import Skeleton from "react-loading-skeleton";

const ShopList = ({
  loadingProducts,
  products,
  filteredProducts,
  filters,
  currentPage,
}) => {
  var sorted = [];
  if (products !== null && filters.sort != null) {
    var sorted =
      filteredProducts == null
        ? filters.sort == "HL"
          ? products.sort((a, b) => Number(b.price) - Number(a.price))
          : products.sort((a, b) => Number(a.price) - Number(b.price))
        : filters.sort == "HL"
        ? filteredProducts.sort((a, b) => Number(b.price) - Number(a.price))
        : filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (products !== null && filters.sort == null) {
    sorted = filteredProducts == null ? products : filteredProducts;
  }
  let productsToShow = sorted.filter((product, index) => {
    if (index < 15 * currentPage && index >= 15 * (currentPage - 1)) {
      return product;
    }
  });
  return (
    <>
      {loadingProducts ? (
        <Row className="justify-content-between mt-3 p-0 p-3-mb">
          <div className="thumbnail cursor-pointer shadow-shop">
            <Skeleton count={1} height="100%" />
          </div>
          <div className="thumbnail cursor-pointer shadow-shop">
            <Skeleton count={1} height="100%" />
          </div>
          <div className="thumbnail cursor-pointer shadow-shop">
            <Skeleton count={1} height="100%" />
          </div>
        </Row>
      ) : (
        <Row className="justify-content-between mt-3 p-0 p-3-mb">
          {filteredProducts == null ? (
            sorted.length > 0 ? (
              <>
                {productsToShow.map((product, index) => (
                  <ShopItem key={product._id} product={product} />
                ))}{" "}
              </>
            ) : (
              <div className=" d-flex align-items-center w-100 justify-content-center">
                <img
                  src="https://image.flaticon.com/icons/svg/2748/2748558.svg"
                  height="300px"
                  width="300px"
                  alt="not-found"
                />
              </div>
            )
          ) : productsToShow != null && productsToShow.length > 0 ? (
            <>
              {productsToShow.map((product) => (
                <ShopItem key={product._id} product={product} />
              ))}{" "}
            </>
          ) : (
            <div className=" d-flex align-items-center w-100 justify-content-center">
              <img
                src="https://image.flaticon.com/icons/svg/2748/2748558.svg"
                height="300px"
                width="300px"
                alt="not-found"
              />
            </div>
          )}
        </Row>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
  products: state.app.products,
  filteredProducts: state.app.filteredProducts,
  filters: state.app.filters,
  currentPage: state.app.currentPage,
});
export default connect(mapStateToProps)(ShopList);
