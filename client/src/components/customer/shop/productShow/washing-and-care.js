import React from "react";
import Clean from "../../../../assets/images/Shop/icons/clean.svg";
import Iron from "../../../../assets/images/Shop/icons/iron.svg";
import Bleach from "../../../../assets/images/Shop/icons/not-bleach.svg";
import Dry from "../../../../assets/images/Shop/icons/not-dry.svg";
import { ShopItemHeading } from "../../utils/heading";
import Skeleton from "react-loading-skeleton";

const WashAndCareItem = ({ image, text }) => {
  return (
    <div className="d-flex align-items-center py-2">
      <img src={image} width="25px" alt="" />
      <span className="ml-3">{text}</span>
    </div>
  );
};

export const WashingAndCare = () => {
  const isLoading = false;
  if (isLoading)
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <Skeleton count={10} />
      </div>
    );
  return (
    <>
      <ShopItemHeading heading="Washing And Care" spacingmobile />
      <WashAndCareItem image={Clean} text="Machine Wash up to 30C/6F" />
      <WashAndCareItem image={Dry} text="Do not tumple" />
      <WashAndCareItem image={Iron} text="Iron on low heat" />
      <WashAndCareItem image={Bleach} text="Do not bleach" />
    </>
  );
};
