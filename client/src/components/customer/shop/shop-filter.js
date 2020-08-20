import React from "react";
import Filter from "../../../assets/images/Shop/icons/display.png";
import menu from "../../../assets/images/home/icons/menu.svg";
// import { useSelector } from 'react-redux';
// import { selectProduct } from '../../features/product/productSlice';
import Select from "react-select";
import { useState } from "react";

import { useSetFilter } from "./Filters";

export const ShopFilter = () => {
  // const {
  //   product: {
  //     products: { count, skip, products },
  //   },
  // } = useSelector(selectProduct);

  const [sortFilter, setSortFilter] = useState({});

  useSetFilter(sortFilter);

  const sortOptions = [
    {
      label: "Highest To Lowest",
      value: "HL",
    },
    {
      label: "Lowest To Highest",
      value: "LH",
    },
  ];

  const onChangeSort = (option) => {
    setSortFilter({
      value: option.value,
      type: "sortFilter",
    });
  };

  return (
    <div className="col-md-12 bg-white mb-2 py-2  shadow-shop">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="row">
            <div className="ml-2 ml-2-mb">
              <img className="d-none-mb px-1" src={Filter} alt="" />
              <img className="ml-2 ml-2-mb" width="23px" src={menu} alt="" />
            </div>
            <div className="col">
              <span className="font-Futura-bold ml-4">
                {
                  // products?.length
                  1 > 0 ? (
                    <>
                      Showing{" "}
                      {
                        // skip
                        +1
                      }
                      -
                      {
                        0 //  count
                      }{" "}
                      of{" "}
                      {
                        // count
                      }{" "}
                      results
                    </>
                  ) : (
                    <>
                      Showing{" "}
                      {
                        // skip
                      }
                      -
                      {
                        // count
                      }{" "}
                      of{" "}
                      {
                        // count
                      }{" "}
                      results
                    </>
                  )
                }
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row align-items-center font-Futura-bold">
            <span className="ml-3">Sort By :</span>
            <div className="form-group col-md-7 col mb-0 p-1">
              <Select options={sortOptions} onChange={onChangeSort} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
