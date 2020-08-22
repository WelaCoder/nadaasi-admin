import React, { useEffect } from "react";
import { ShopCarousel } from "./shop-carousel";
import SingleItemImages from "./singleItemImages";
import SingleItemCarousel from "./singleItemCarousel";
import SingleItemDetails from "./singleItemDetails";
import { WashingAndCare } from "./washing-and-care";
import ProductDetails from "./ProductDetails";
import { SingleCarouselItem } from "./single-carousel-item";
import Image1 from "../../../../assets/images/Shop/7.jpg";
import Image2 from "../../../../assets/images/Shop/4.jpg";
import Image3 from "../../../../assets/images/Shop/5.jpg";
import Image4 from "../../../../assets/images/Shop/2.jpg";
import { BreadCrumbs } from "../../utils/breadcrumb";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProducts,
  setCurrentProduct,
  setChoosenProduct,
} from "../../../../actions/appActions";
// import { FETCH_SINGLE_PRODUCT } from "../features/product/productSlice";
import Skeleton from "react-loading-skeleton";

const Products = [
  {
    image: Image1,
    name: "Magnolla Crepe..",
    price: "120.16",
    rating: 5,
  },
  {
    image: Image2,
    name: "Effie Evening..",
    price: "135.00",
    rating: 5,
  },
  {
    image: Image3,
    name: "Fenella Silk",
    price: "136.40",
    rating: 5,
  },
  {
    image: Image4,
    name: "Constantina",
    price: "137.70",
    rating: 5,
  },
];

const ProductShow = ({
  loadingProducts,
  getProducts,
  setCurrentProduct,
  currentProduct,
  setChoosenProduct,
}) => {
  const params = useParams();
  const { pathname } = useLocation();

  console.log(params.id);
  useEffect(() => {
    getProducts().then(() => {
      setCurrentProduct(params.id);
    });
  }, []);

  useEffect(() => {
    console.log(currentProduct);
    if (currentProduct !== null) {
      setChoosenProduct({
        _id: currentProduct._id,
        color:
          currentProduct.dressColor == null
            ? null
            : currentProduct.dressColor[0],
        size:
          currentProduct.dressSize == null ? null : currentProduct.dressSize[0],
        quantity: 1,
      });
    }
  }, [currentProduct]);

  return (
    <div className="container">
      <div className="mt-5 col-md-11 mx-auto">
        <div className="col-md-12">
          {currentProduct == null ? (
            <Skeleton count={1} />
          ) : (
            <>
              <BreadCrumbs
                currentLink={currentProduct.name}
                currentLinkAddres={pathname}
              />
            </>
          )}
          <div className="row">
            <div className="col-md-2 order-mb-2">
              <SingleItemImages />
            </div>
            <div className="col-md-5 mr-2 order-mb-1">
              <SingleItemCarousel />
            </div>
            <div className="col-md-3 px-1 order-3">
              <SingleItemDetails />
            </div>
            <div className="col-md-12 mt-4 order-4">
              <div className="row">
                <div className="col-md-8 row-wrap mb-3">
                  <ProductDetails />
                </div>
                <div className="col-md-4 row-wrap mb-3 font-Futura-bold">
                  <WashingAndCare />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-3 order-5">
              {loadingProducts ? (
                <Skeleton count={12} />
              ) : (
                <>
                  <h3 className="text-center font-Futura-bold py-3">
                    More Relative Items
                  </h3>
                  <ShopCarousel itemsonMobile={2} itemsOnDesktop={4}>
                    {Products.map((item, idx) => (
                      <SingleCarouselItem key={idx} item={item} />
                    ))}
                  </ShopCarousel>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
  currentProduct: state.app.currentProduct,
});
export default connect(mapStateToProps, {
  getProducts,
  setCurrentProduct,
  setChoosenProduct,
})(ProductShow);
