import {
    GET_MARCHANT_RETURN_REQUEST,
    ERROR, CLEAR_RETURN_ISSUE
} from '../actions/types'
const initialState = {
    returnRequest: null,
    loading: true,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MARCHANT_RETURN_REQUEST:
            return {
                ...state,
                returnRequest: action.payload,
                loading: false
            };
        case CLEAR_RETURN_ISSUE:
            return {
                ...state,
                returnRequest: state.returnRequest.map(r => r._id == action.payload._id ? action.payload : r)
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }

};
