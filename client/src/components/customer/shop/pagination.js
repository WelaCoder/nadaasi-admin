import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../../actions/appActions";

const Pagination = ({ currentPage, setCurrentPage, products }) => {
  const [skip, setSkip] = useState(0);

  // useEffect(() => {
  //   if (skip !== 0) {
  //     dispatch(FETCH_PRODUCTS(skip));
  //   }
  // }, [currentPage, dispatch, skip]);
  const [buttons, setButtons] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  useEffect(() => {
    setButtons(totalPages.filter((b, i) => true));
  }, [currentPage, totalPages]);
  useEffect(() => {
    if (products != null) {
      let pages = Number((products.length / 15).toString().split(".")[0]);
      setTotalPages(
        new Array(
          // pages
          pages
        ).fill()
      );
    }
  }, [products]);

  if (products == null) return <></>;
  let pages = Number((products.length / 15).toString().split(".")[0]);
  // let buttons = new Array(
  //   // pages
  //   pages
  // ).fill();
  return (
    <nav>
      {false ? (
        ""
      ) : (
        <ul class="pagination">
          {buttons.map((page, idx) => (
            <li
              key={idx}
              class={`page-item bg-danger  border-black cursor-pointer `}
            >
              <span
                onClick={() => {
                  setSkip(
                    // limit *
                    idx + 2
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

          {Number() < currentPage && (
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
const mapStateToProps = (state) => ({
  currentPage: state.app.currentPage,
  products: state.app.products,
});
export default connect(mapStateToProps, { setCurrentPage })(Pagination);
