import axios from "axios";
import {
    GET_ADMIN_ORDER,
    ERROR
} from './types'
export const getAllAdminOrders = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/order/admin')
        dispatch({
            type: GET_ADMIN_ORDER,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}
