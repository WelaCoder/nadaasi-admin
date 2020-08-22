import React from "react";
import { SingleItemImage } from "./singleItemImage";
// import { useSelector } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
const SingleItemImages = ({ currentProduct }) => {
  if (currentProduct == null)
    return (
      <>
        <div className="flex-column flex-row-mb justify-content-between h-100 d-flex">
          <div className="thumbnail-single shadow-shop mb-1 mr-1">
            <Skeleton count={1} height="100%" />
          </div>
          <div className="thumbnail-single shadow-shop mb-1 mr-1">
            <Skeleton count={1} height="100%" />
          </div>
          <div className="thumbnail-single shadow-shop mb-1 mr-1">
            <Skeleton count={1} height="100%" />
          </div>
        </div>
      </>
    );

  return (
    <div className="flex-column flex-row-mb justify-content-between h-100 d-flex">
      {currentProduct.images.slice(0, 3).map((image) => (
        <SingleItemImage key={image} image={image} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
});
export default connect(mapStateToProps)(SingleItemImages);
