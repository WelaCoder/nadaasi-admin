import { LOAD_ORDERS, GET_ORDER, SET_CURRENT_ORDER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { API } from "../constants/constants";
export const loadOrders = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/`);
    dispatch({
      type: LOAD_ORDERS,
      payload: res.data.orders,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentOrder = (orderId) => async (dispatch) => {
  try {
    console.log("getting order");
    console.log(orderId);
    setAuthToken(localStorage.token);
    const res = await axios.get(`${API}/api/order/${orderId}`);
    dispatch({
      type: SET_CURRENT_ORDER,
      payload: res.data.order,
    });
  } catch (error) {
    console.log(error);
  }
};
