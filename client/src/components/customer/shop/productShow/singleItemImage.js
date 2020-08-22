import React from "react";

export const SingleItemImage = ({ image }) => {
  return (
    <div className="thumbnail-single shadow-shop mb-1 mr-1">
      <img className="img-full-shop" src={`/uploads/${image}`} alt={image} />
    </div>
  );
};
