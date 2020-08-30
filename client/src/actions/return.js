import axios from "axios";
import { GET_MARCHANT_RETURN_REQUEST, CREATE_REQUEST , CLEAR_RETURN_ISSUE  ,ERROR } from './types'

export const returnMerchant = ({ name, orderId, email, problem }) => async (dispatch) => {
    try {
       const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }
        const body = JSON.stringify({ name, orderId, email, problem });
        console.log('object');
        const res = await axios.post('/api/merchantreturn', body, config)
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
        const res = await axios.get('/api/merchantreturn');
        dispatch({
            type: GET_MARCHANT_RETURN_REQUEST,
            payload : res.data
        })

    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}
export const updateStatus = (id , data) => async (dispatch) => {
    try {
         await axios.patch(`/api/merchantreturn/${id}`, data)
        dispatch({
            type: CLEAR_RETURN_ISSUE,
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}