import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Banner from "./Banner";
import Filters, {
  RangeFilter,
  DressType,
  FilterSizes,
  FindYourOwnStyle,
} from "./Filters";

import BannerImage from "../../../assets/images/Shop/Group-108.png";

import { ShopList } from "./shop-list";
import { ShopFilter } from "./shop-filter";
import { BreadCrumbs } from "../utils/breadcrumb";
import { Pagination } from "./pagination";
// import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
// import { FETCH_PRODUCTS } from "../features/product/productSlice";

const ShopePage = () => {
  // const { isLoading } = useSelector((state) => state.product);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("object");
  //   dispatch(FETCH_PRODUCTS());
  // }, [dispatch]);

  return (
    <Container className="py-0-mb">
      <BreadCrumbs />
      <Row className="col-reverse-mb">
        <Col sm={12} md={3} className="d-none-mb">
          <Filters>
            <DressType />
            <FilterSizes />
            <RangeFilter />
            <FindYourOwnStyle />
          </Filters>
        </Col>
        <Col sm={12} md={9}>
          <Row>
            {false ? (
              <div className="w-100">
                <Skeleton count={1} height="300px" />
              </div>
            ) : (
              <Banner
                textLeft
                height="300px"
                image={BannerImage}
                title="New Collection 2020"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
              />
            )}
          </Row>
          <Col sm={12} md={3} className="d-mb mt-4 ipad-shop">
            <Filters>
              <DressType />
              <FilterSizes />
              <RangeFilter />
            </Filters>
          </Col>
          <Row className="mt-4 p-3-mb">
            {false ? (
              <div className="w-100">
                <Skeleton count={1} height="40px" />
              </div>
            ) : (
              <ShopFilter />
            )}
          </Row>
          <ShopList />
          <Row className="mt-4 justify-content-end p-3-mb">
            <Pagination />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopePage;
