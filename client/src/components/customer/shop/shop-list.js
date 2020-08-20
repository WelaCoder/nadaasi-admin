import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { ShopItem } from "./shop-item";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
import Skeleton from "react-loading-skeleton";

const ShopList = ({ loadingProducts, products }) => {
  // const {
  //   product: { products, loadingProducts },
  // } = useSelector(selectProduct);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [products]);
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
          {products.length > 0 ? (
            <>
              {products.map((product) => (
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
});
export default connect(mapStateToProps)(ShopList);
