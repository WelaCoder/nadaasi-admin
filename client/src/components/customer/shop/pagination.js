import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectProduct } from '../../features/product/productSlice';
// import { FETCH_PRODUCTS } from '../../features/product/productSlice';

export const Pagination = () => {
  // const {
  //   product: {
  //     products: { count, limit },
  //     isLoading,
  //   },
  // } = useSelector(selectProduct);

  // const dispatch = useDispatch();

  // const pages = Math.ceil(count / limit) || 0;

  const [currentPage, setCurrentPage] = useState(1);

  const [skip, setSkip] = useState(0);

  // useEffect(() => {
  //   if (skip !== 0) {
  //     dispatch(FETCH_PRODUCTS(skip));
  //   }
  // }, [currentPage, dispatch, skip]);

  return (
    <nav>
      {false ? (
        ""
      ) : (
        <ul class="pagination">
          {new Array(
            // pages
            4
          )
            .fill()
            .map((page, idx) => (
              <li
                key={idx}
                class={`page-item bg-danger  border-black cursor-pointer `}
              >
                <span
                  onClick={() => {
                    setSkip(
                      // limit *
                      idx
                    );
                    setCurrentPage(idx + 1);
                  }}
                  class={`page-link ${
                    idx + 1 === currentPage ? "bg-black text-white" : ""
                  }`}
                >
                  {idx + 1}
                </span>
              </li>
            ))}

          {Number() > currentPage && (
            // pages
            <>
              <li class="page-item cursor-pointer ">
                <span
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                    setSkip(
                      currentPage
                      // *  limit
                    );
                  }}
                  class="page-link"
                >
                  Next
                </span>
              </li>
              <li class="page-item cursor-pointer ">
                <span
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                    setSkip(
                      currentPage * 1
                      // limit
                    );
                  }}
                  class="page-link"
                >
                  <i className="fa fa-angle-right"></i>
                  <i className="fa fa-angle-right"></i>
                </span>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};
