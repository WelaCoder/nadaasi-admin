import axios from "axios";
import { GET_ADMIN_ORDER, SET_PRODUCT_IN_STOCK, ERROR } from "./types";
import { API } from "../constants/constants";
import { toast } from "react-toastify";
export const setProductInStock = (productId, inStock) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${API}/api/product/${productId}/`,
      { inStock },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: SET_PRODUCT_IN_STOCK,
      payload: res.data.product,
    });
    toast.success("Product updated Successfully...");
  } catch (error) {
    dispatch({
      type: ERROR,
    });
  }
};
