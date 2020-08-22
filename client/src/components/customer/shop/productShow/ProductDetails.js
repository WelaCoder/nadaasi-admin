import React from "react";
import { ShopItemHeading } from "../../utils/heading";
// import { useSelector } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
const ProductDetailItem = ({ heading, text = "N / A" }) => {
  return (
    <div className="row py-2 font-Futura-bold cart-h3">
      <div className="col-md-5">{heading}</div>
      <div className="col-md-7">{text}</div>
    </div>
  );
};

const ProductDetails = ({ currentProduct }) => {
  // const { isLoading } = useSelector((state) => state.product);
  // const {
  //   product: {
  //     activeProduct: { details },
  //   },
  // } = useSelector(selectProduct);
  const isLoading = false;
  if (currentProduct == null)
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <Skeleton count={10} />
      </div>
    );

  return (
    <>
      <ShopItemHeading heading="Product Details" spacing />
      <ProductDetailItem heading="Closure" text={currentProduct?.closure} />
      <ProductDetailItem heading="Details" text={currentProduct?.details} />
      <ProductDetailItem heading="Length" text={currentProduct?.length} />
      <ProductDetailItem heading="Waistline" text={currentProduct?.waistLine} />
      <ProductDetailItem heading="Neckline" text={currentProduct?.neckLine} />
      <ProductDetailItem
        heading="Model's Height And Size"
        text={currentProduct?.modelHeightSize}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
});
export default connect(mapStateToProps)(ProductDetails);
