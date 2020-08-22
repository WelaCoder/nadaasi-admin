import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import Skeleton from "react-loading-skeleton";

export const BreadCrumbs = ({ currentLink, currentLinkAddress }) => {
  // const { isLoading } = useSelector((state) => state.product);

  const active = currentLink ? "text-muted" : "font-weight-bold text-dark";

  if (false)
    return (
      <nav aria-label="breadcrumb ">
        <Skeleton count={1} />
      </nav>
    );

  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb  mb-2 bg-transparent font-Futura-light p-0">
        <li className="breadcrumb-item">
          <Link className="text-muted" to="/">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link className={`${active}`} to="/shop">
            Shop
          </Link>
        </li>
        {currentLink && (
          <li className="breadcrumb-item" aria-current="page">
            <Link
              to={currentLinkAddress}
              className="text-dark font-weight-bold"
            >
              {currentLink}
            </Link>
          </li>
        )}
      </ol>
    </nav>
  );
};
