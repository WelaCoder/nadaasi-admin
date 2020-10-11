import axios from "axios";
import { API } from "../constants/constants";
import { toast } from 'react-toastify';
import {
  Add_PRODUCT,
  DELETE_ITEM_FROM_CART,
  SET_LOADING,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  SET_CHOOSEN_PRODUCT,
  ADD_TO_CART,
  SET_TOAST,
  LOAD_CART,
  UPDATE_QUANTITY,
  SET_FILTER,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  SET_CURRENT_PAGE,
  LOAD_DRESS_TYPES,
  GET_CURRENT_PRODUCT, SET_SALE
} from "./types";

export const addProduct = (data) => async (dispatch) => {
  try {

    const res = await axios.post(`${API}/api/product`, data);
    return true;
  } catch (error) {
    console.log(error);
  }
};


export const editProduct = (data, id) => async (dispatch) => {
  try {
    console.log(`${API}/api/product/${id}`);
    const res = await axios.post(`${API}/api/product/${id}`, data);

    return true;
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
    const res = await axios.get(`${API}/api/product/admin`);
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
export const setCurrentProduct = (productId) => async (dispatch) => {


  try {
    dispatch({
      type: GET_CURRENT_PRODUCT,
      payload: null,
    });

    const res = await axios.get(`${API}/api/product/${productId}`);
    dispatch({
      type: GET_CURRENT_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }

};
export const setChoosenProduct = (product) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CHOOSEN_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (choosenProduct) => async (dispatch) => {
  try {
    if (choosenProduct.size == "Custom") {
      if (
        choosenProduct.neck == null ||
        choosenProduct.overBust == null ||
        choosenProduct.bust == null ||
        choosenProduct.neck == null ||
        choosenProduct.hip == null ||
        choosenProduct.waistToAboveKnee == null ||
        choosenProduct.shoulderToWaist == null ||
        choosenProduct.vNeckCut == null ||
        choosenProduct.wrist == null ||
        choosenProduct.foreArm == null ||
        choosenProduct.bicep == null ||
        choosenProduct.armHole == null ||
        choosenProduct.shoulderSeam == null ||
        choosenProduct.armLength == null ||
        choosenProduct.aboveKneeToAnkle == null ||
        choosenProduct.neckToAboveHeel == null ||
        choosenProduct.neckToHeel == null ||
        choosenProduct.hips == null ||
        choosenProduct.waist == null ||
        choosenProduct.underBust == null
      ) {
        dispatch({
          type: SET_TOAST,
          payload: {
            type: "error",
            message: "Please enter remaining values for custom size",
          },
        });
      }
    }

    const res = await axios.post("/api/cart", choosenProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: ADD_TO_CART,
      payload: res.data.cartItem,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadCart = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/cart");

    dispatch({
      type: LOAD_CART,
      payload: res.data.cartItems,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadDressTypes = () => async (dispatch) => {
  try {
    console.log('loading dress types');
    const res = await axios.get(`${API}/api/dressType`);

    dispatch({
      type: LOAD_DRESS_TYPES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCount = (cartId, count) => async (dispatch) => {
  try {
    console.log(cartId);
    const res = await axios.post(
      "/api/cart/" + cartId + "/updateQuantity",
      { quantity: count },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: UPDATE_QUANTITY,
      payload: res.data.cartItem,
    });
  } catch (error) {
    console.log(error);
  }
};


export const setSale = (data) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${API}/api/dressType/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success('Sale Updated Successfully...')
    dispatch({
      type: SET_SALE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItemFromCart = (id) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/cart/" + id);

    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: res.data.cartItem,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setToast = (toastMessage) => async (dispatch) => {
  try {
    dispatch({
      type: SET_TOAST,
      payload: toastMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFilters = (filters) => async (dispatch) => {
  try {
    dispatch({
      type: SET_FILTER,
      payload: filters,
    });
    if (filters.price == null) {
      dispatch(filterProducts());
    }
  } catch (error) {
    console.log(error);
  }
};

export const filterProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_PRODUCTS,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sortProducts = (order) => async (dispatch) => {
  try {
    dispatch({
      type: SORT_PRODUCTS,
      payload: order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentPage = (page) => async (dispatch) => {
  try {
    console.log(page);
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  } catch (error) {
    console.log(error);
  }
};
