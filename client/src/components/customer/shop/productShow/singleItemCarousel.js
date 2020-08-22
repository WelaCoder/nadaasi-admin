import React from "react";
import { ShopCarousel } from "../../utils/shop-carousel";
// import { useSelector } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
const SingleItemCarousel = ({ currentProduct }) => {
  // const { product } = useSelector(selectProduct);
  // const {
  //   activeProduct: { images = [] },
  // } = product;

  // const { isLoading } = useSelector((state) => state.product);

  if (currentProduct == null)
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <Skeleton count={1} height="600px" />
      </div>
    );

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <ShopCarousel itemsOnDesktop={1} itemsonMobile={1}>
        {currentProduct.images.map((image) => (
          <img
            className="img-full"
            src={`/uploads/${image}`}
            alt={image}
            key={image}
          />
        ))}
      </ShopCarousel>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
});
export default connect(mapStateToProps)(SingleItemCarousel);
