import axios from "axios";
import { API } from "../constants/constants";
import {
    GET_ADMIN_ORDER,
    ERROR,
    CAPTURE_ORDER
} from './types'
export const getAllAdminOrders = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API}/api/order/admin`)
        dispatch({
            type: GET_ADMIN_ORDER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}



export const captureOrder = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API}/api/order/${id}/captureOrder`)
        dispatch({
            type: CAPTURE_ORDER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}
