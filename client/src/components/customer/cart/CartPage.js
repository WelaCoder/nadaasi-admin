import React from "react";
import { BreadCrumbs } from "../utils/breadcrumb";
import { CartHeading } from "./cart-heading";
import CartList from "./cart-list";
import { Coupon } from "./coupon";
import { Container, Row, Col } from "react-bootstrap";
import { NewsLetter } from "./newsletter";
import CartTotal from "./cart-total";
import { useLocation } from "react-router-dom";
const CartPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className="cart-img d-flex justify-content-center 
  align-items-center font-Futura-bold"
      >
        <h1 className="letter-spacing-cart text-uppercase">Cart</h1>
      </div>
      <Container>
        <Col md={12} className="mt-3">
          <Row>
            <div className="col p-0-mb">
              <BreadCrumbs currentLink="Cart" currentLinkAddress={pathname} />
              <CartHeading Heading="Shopping Cart" />
              <CartList />
              <Coupon />
              <NewsLetter />
            </div>
            <Col md={4} className="shadow-shop mb-3">
              <CartHeading className="mt-3 mb-3" Heading="Cart Total" />
              <CartTotal />
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default CartPage;
