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



export const captureOrder = (id, status) => async (dispatch) => {
    try {
        console.log(status);
        const res = await axios.post(`${API}/api/order/${id}/captureOrder`, { status }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
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
