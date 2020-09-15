import axios from "axios";
import { API } from "../constants/constants";
import { GET_MARCHANT_RETURN_REQUEST, CREATE_REQUEST, CLEAR_RETURN_ISSUE, ERROR, SET_TOAST } from './types'
import { toast } from 'react-toastify'
export const returnMerchant = ({ name, orderId, email, problem }) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = JSON.stringify({ name, orderId, email, problem });
        console.log('object');
        const res = await axios.post(`${API}/api/merchantreturn`, body, config)
        dispatch({
            type: CREATE_REQUEST,
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}
export const merchantRequest = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API}/api/merchantreturn`);
        dispatch({
            type: GET_MARCHANT_RETURN_REQUEST,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}
export const updateStatus = (id, data) => async (dispatch) => {
    try {
        const res = await axios.patch(`${API}/api/merchantreturn/${id}`, data)
        dispatch({
            type: CLEAR_RETURN_ISSUE,
            payload: res.data
        })
        toast.success('Return request updated.')
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}