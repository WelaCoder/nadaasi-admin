import { toast } from "react-toastify";
import {
    CREATE_FEEDBACK,
    CREATE_FEEDBACK_ERROR,
    UPDATE_FEEDBACK,
    GET_FEEDBACK,
    GET_FEEDBACK_ERROR,
    UPDATE_FEEDBACK_ERROR
} from '../actions/types'
const initialState = {
    feedback: null,
    feedbacks: null,
    Loading: true
}
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FEEDBACK:
            toast.success("Send Successfully", { autoClose: '1000' });
            return {
                ...state,
                feedback: action.payload,
                Loading: false
            }
        case GET_FEEDBACK:
            return {
                ...state,
                feedbacks: action.payload,
                Loading: false
            }
        case GET_FEEDBACK_ERROR:
            return {
                ...state,
                Loading: false
            }
        case UPDATE_FEEDBACK:
            toast.success("Feedback is Resolved Successfully", { autoClose: '1000' });
            console.log(action.payload)
            return {
                ...state,
                feedback: state.feedback.map(f => f._id == action.payload._id ? action.payload : f),
                Loading: false
            }
        case UPDATE_FEEDBACK_ERROR:
            return {
                ...state,
                Loading: false
            }
        case CREATE_FEEDBACK_ERROR:
            toast.error("Please Login First to Send Feedback", { autoClose: '1000' });
            return {
                ...state,
                Loading: false
            }
        default:
            return state
    }
}