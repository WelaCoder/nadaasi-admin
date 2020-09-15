import React, { useEffect } from "react";
// import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../product/productList";
import Header from "../header";
import Loader from "../spinner";
import NotFound from "../NotFound";
import { connect } from "react-redux";
import { getProducts } from "../../../actions/appActions";
const ViewProducts = ({ products, getProducts }) => {
  // setAuthorizationToken();
  // useIsAdmin();
  // const { products, isLoading } = useProducts();
  // const isLoading = false;
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mt-4">
      {products == null ? (
        <Loader />
      ) : (
        <>
          <Header heading="Products" item={products} />
          <div className="col-md-12">
            <div className="row">
              <div className="p-0 col-md-12 my-2">
                {products.length > 0 ? (
                  <ProductList products={products} />
                ) : (
                  <NotFound message="Not Products Added." />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.app.products,
});
export default connect(mapStateToProps, { getProducts })(ViewProducts);
