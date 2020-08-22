import React from "react";
import Like from "../../../../assets/images/home/icons/heart.svg";
import { ItemDetails, Price, Ratings } from "../../utils/details";

export const SingleCarouselItem = ({ item }) => {
  const { image, name, rating, price } = item;
  return (
    <div className="w-100-mb px-1">
      <div className=" shadow-shop">
        <img className="img-full" src={image} alt="" />
      </div>
      <div className="product-info py-2">
        <ItemDetails>
          <h6 className="font-weight-bold mb-0">{name}.</h6>
          <img src={Like} width="17px" alt="like" />
        </ItemDetails>
        <ItemDetails>
          <Price currency="€" price={price} />
          <Ratings rating={rating} />
        </ItemDetails>
      </div>
    </div>
  );
};
