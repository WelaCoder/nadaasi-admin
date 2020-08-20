import React from "react";
import Like from "../../../assets/images/home/icons/heart.svg";
import { Ratings, ItemDetails, Price } from "../utils/details";

import { useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";

export const ShopItem = ({ product }) => {
  const { name, rating, price, images, _id } = product;
  const history = useHistory();
  return (
    <FadeIn>
      <div className="mb-3 w-100-mb   p-0">
        <div
          onClick={() => {
            history.push(`/shop-item/${_id}`);
          }}
          className="thumbnail cursor-pointer shadow-shop"
        >
          <img
            className="img-full-shop"
            src={`/uploads/${images[0]}`}
            alt="image not found"
          />
        </div>
        <div className="product-info py-2">
          <ItemDetails>
            <h6 className="font-weight-bold mb-0">{name}</h6>
            <img src={Like} width="17px" alt="like" />
          </ItemDetails>
          <ItemDetails>
            <Price currency="€" price={price} />
            <Ratings rating={rating} />
          </ItemDetails>
        </div>
      </div>
    </FadeIn>
  );
};
