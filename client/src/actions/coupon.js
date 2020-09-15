import axios from "axios";
import { toast } from "react-toastify";
import {
  CREATE_COUPON,
  COUPON_ERROR,
  GET_ALL_COUPON,
  UPDATE_COUPON,
} from "./types";
import { API } from "../constants/constants";
//create coupon

export const createCoupon = ({
  name,
  code,
  discount,
  discountType,
  isActive,
}) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      code,
      discountType,
      discount,
      isActive,
    });
    const res = await axios.post(`${API}/api/coupon`, body, config);
    dispatch({
      type: CREATE_COUPON,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COUPON_ERROR,
      payload: error.response.data.msg,
    });
  }
};
// update Coupon
export const updateCoupon = (id, status) => async (dispatch) => {
  try {
    const res = await axios.patch(`${API}/api/coupon/${id}`, status);
    dispatch({
      type: UPDATE_COUPON,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COUPON_ERROR,
      payload: error.response.data.msg,
    });
  }
};
//get all coupon
export const getAllCoupons = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/api/coupon`);
    dispatch({
      type: GET_ALL_COUPON,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COUPON_ERROR,
      payload: error.response.data.msg,
    });
  }
};
