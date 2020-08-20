import axios from "axios";

import { Add_PRODUCT, SET_LOADING, GET_PRODUCTS } from "./types";

export const addProduct = (data) => async (dispatch) => {
  try {
    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    console.log("add product");
    const res = await axios.post("/api/product", data);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    const res = await axios.get("/api/product");
    console.log(res.data.products);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.products,
    });
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};
