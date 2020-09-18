import { toast } from 'react-toastify';
import { GET_ADMIN_ORDER, ERROR, CAPTURE_ORDER, GET_CURRENT_PRODUCT } from '../actions/types'
const initialState = {
    adminOrder: null,
    error: null,
    currentProduct: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload
            };
        case GET_ADMIN_ORDER:
            return {
                ...state,
                adminOrder: action.payload
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CAPTURE_ORDER:
            toast.success("Order status updated...")
            return {
                ...state,
                adminOrder: state.adminOrder.map(e => e._id == action.payload._id ? action.payload : e)
            }
        default:
            return state;
    }

};
