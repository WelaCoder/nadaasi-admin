import React from "react";
import Star from "../../../assets/images/home/icons/star.svg";

export const Ratings = ({ rating }) => {
  return (
    <span>
      {new Array(rating).fill().map((_, idx) => (
        <img key={idx} className="ml-2" width="10px" src={Star} alt="star" />
      ))}
    </span>
  );
};

export const ItemDetails = ({ children }) => {
  return (
    <div
      className="product d-flex font-Futura-light  
  justify-content-between align-items-end "
    >
      {children}
    </div>
  );
};

export const Price = ({ currency, price }) => {
  return (
    <h6 className="font-weight-bold mb-0">
      <span className="mr-1">{currency}</span>
      <span>{price}</span>
    </h6>
  );
};
