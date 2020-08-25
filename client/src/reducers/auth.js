import { toast } from "react-toastify";
import {
    AUTH_CUSTOMER_SUCCESS,
    LOAD_USER,
    AUTH_CUSTOMER_FAILURE,
    AUTH_CUSTOMER_LOGOUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isAdmin : false,
    loading: true,
    user : null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            toast.success("User Login Successfully", { autoClose: '1500' });
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                isAdmin: false,
                user: action.payload
            }
        case AUTH_CUSTOMER_SUCCESS:
            toast.success("User Login Successfully", { autoClose: '1500' });
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isAdmin: false,
                loading: false
            }
        case AUTH_CUSTOMER_FAILURE:
            toast.error(action.payload, { autoClose: '1500' });
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                users : null,
                isAuthenticated: false,
                isAdmin: false,
                loading: false
            }
        case AUTH_CUSTOMER_LOGOUT:
            toast.success("User Logout Successfully", { autoClose: '1500' });
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                users : null,
                isAuthenticated: false,
                isAdmin: false,
                loading: false
            }
        default:
            return state
    }
}