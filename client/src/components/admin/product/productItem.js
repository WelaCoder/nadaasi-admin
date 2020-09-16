import React from "react";
import Toggle from "react-toggle";
import axios from "axios";
import { API } from "../../../constants/constants";
import { setProductInStock } from "../../../actions/adminProduct";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = ({ product, setProductInStock }) => {
  const {
    name,
    dressColor,
    images,
    inStock,
    price,
    dressSize,
    dressType,
    _id,
  } = product;
  // const handleChange = (_id, status) => {
  //   const payload = {
  //     inStock: status,
  //   };
  //   axios
  //     .patch(`/product/${_id}`, payload)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.response.data));
  // };
  return (
    <div class="shadow-sm mb-2 rounded-lg list-group-item list-group-item-action">
      <div class="row">
        <div class="col-md-12 m-0">
          <div class="row justify-content-between p-1">
            <div class="d-flex flex-column">
              <Link to={`/admin/products/${_id}`} style={{ color: "black" }}>
                <div class="font-weight-bold text-capitalize border-bottom py-1 mb-2">
                  {name}
                </div>
              </Link>
              <div class="d-flex small justify-content-between ">
                <div class="mr-1 text-primary text-muted text-capitalize">
                  {dressType}
                </div>
                <div>
                  {images.map((image, idx) => (
                    <img
                      key={idx}
                      class="sm-category rounded-lg mr-2"
                      src={`${API}/uploads/${image}`}
                      alt={image}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div class="font-weight-bold d-flex">
                {dressSize.map((sizeValue, idx) => (
                  <div key={idx} className="tag mr-2 px-2">
                    {sizeValue}
                  </div>
                ))}
              </div>
              <div class="font-weight-bold d-flex mt-2">
                {dressColor.map((clr, idx) => (
                  <div
                    key={idx}
                    className="mr-2 custom-rounded shadow-sm"
                    style={{
                      backgroundColor: `${clr}`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <div class="font-weight-bold d-flex justify-content-end border-bottom align-items-end">
                <h5 class=" text-success font-weight-bold">￡ {price}</h5>
              </div>
              <div class="font-weight-bold d-flex mt-2">
                <span className="mr-1">In Stock</span>
                <Toggle
                  defaultChecked={inStock}
                  onChange={() => {
                    setProductInStock(_id, !inStock);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.app.products,
});
export default connect(mapStateToProps, { setProductInStock })(ProductItem);
