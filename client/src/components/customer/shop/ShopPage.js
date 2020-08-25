import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Banner from "./Banner";
import Filters from "./Filters";

import BannerImage from "../../../assets/images/Shop/Group-108.png";
import { getProducts, loadCart } from "../../../actions/appActions";
import { connect } from "react-redux";
import ShopList from "./shop-list";
import ShopFilter from "./shop-filter";
import { BreadCrumbs } from "../utils/breadcrumb";
import Pagination from "./pagination";
import Skeleton from "react-loading-skeleton";

const ShopePage = ({ loadingProducts, getProducts, loadCart }) => {
  useEffect(() => {
    getProducts();
    loadCart();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="py-0-mb">
      <BreadCrumbs />
      <Row className="col-reverse-mb">
        <Col sm={12} md={3} className="d-none-mb">
          <Filters></Filters>
        </Col>
        <Col sm={12} md={9}>
          <Row>
            {loadingProducts ? (
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
            <Filters></Filters>
          </Col>
          <Row className="mt-4 p-3-mb">
            {loadingProducts ? (
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
const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
});
export default connect(mapStateToProps, { getProducts, loadCart })(ShopePage);
