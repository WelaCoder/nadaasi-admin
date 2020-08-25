import axios from "axios";

import { 
    CREATE_FEEDBACK,
    CREATE_FEEDBACK_ERROR,
    UPDATE_FEEDBACK,
    GET_FEEDBACK,
    GET_FEEDBACK_ERROR,
    UPDATE_FEEDBACK_ERROR
} from './types'

export const createFeedback = ({ name, subject, email, message }) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ name, subject, email, message });
        const res = await axios.post('/api/feedback', body, config);
        console.log(res.data);
        dispatch({
            type: CREATE_FEEDBACK,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_FEEDBACK_ERROR
        })
    }
};
export const getFeedback = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/feedback');
        dispatch({
            type: GET_FEEDBACK,
            payload :res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_FEEDBACK_ERROR
        })
    }
}
export const updateFeedback = (id, status) => async (dispatch) => {
    try {
        const res = await axios.patch(`/api/feedback/${id}` , status);
        dispatch({
            type: UPDATE_FEEDBACK
        })
    } catch (error) {
        dispatch({
            type: UPDATE_FEEDBACK_ERROR
        })
    }
}