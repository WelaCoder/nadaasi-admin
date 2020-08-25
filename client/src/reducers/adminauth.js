import { toast } from "react-toastify";
import {
    LOGIN_ADMIN,
    LOAD_ADMIN,
    ADMIN_LOGOUT,
    ADMIN_LOGIN_ERROR
} from "../actions/types";
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticate: false,
    isAdmin : false,
    isloading: true,
    user : null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ADMIN:
            toast.success("Admin Login Successfully", { autoClose: '1500' });
            return {
                ...state,
                isAuthenticate: true,
                isloading: false,
                isAdmin: false,
                user: action.payload
            }
        case LOGIN_ADMIN:
            toast.success("Admin Login Successfully", { autoClose: '1500' });
            localStorage.setItem('token', action.payload.token)
            return {
                    ...state,
                    ...action.payload,
                    isAuthenticate: true,
                    isAdmin: true,
                    isloading: false
                }
        case ADMIN_LOGIN_ERROR:
            toast.error("Automatically Logout Session Expried", { autoClose: '1500' });
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                users : null,
                isAuthenticate: false,
                isAdmin: false,
                isloading: false
            }
        case ADMIN_LOGOUT:
            toast.success("Logout Successfully", { autoClose: '1500' });
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                users : null,
                isAuthenticate: false,
                isAdmin: false,
                isloading: false
            }
        default:
            return state
    }
}