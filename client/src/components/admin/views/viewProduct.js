import React from "react";
// import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../product/productList";
// import { useIsAdmin } from "../hooks/useIsAdmin";
// import { setAuthorizationToken } from "../helpers/utils";
import Header from "../header";
import { Loader } from "../spinner";
import NotFound from "../NotFound";

export const ViewProducts = () => {
  // setAuthorizationToken();
  // useIsAdmin();
  // const { products, isLoading } = useProducts();
  const products = [];
  const isLoading = false;
  return (
    <div className="container mt-4">
      {isLoading ? (
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
