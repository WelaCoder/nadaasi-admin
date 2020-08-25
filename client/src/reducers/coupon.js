import { toast } from "react-toastify";

import {
    CREATE_COUPON,
    GET_ALL_COUPON,
    COUPON_ERROR,
    UPDATE_COUPON,
} from '../actions/types'

const initialState = {
    coupon: null,
    coupons: [],
    loading: false,
    error: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COUPON:
            toast.success("Coupon is Created Successfully", { autoClose: '1500' });
            return {
                loading:true,
                ...state,
                coupon: action.payload,
                loading : false
            }
        case UPDATE_COUPON:
            toast.success("Update Successfully", { autoClose: '1500' });
            return {
                ...state,
                loading: false
            }
        case GET_ALL_COUPON:
            console.log(action.payload)
            return {
                loading : true,
                ...state,
                coupons:  action.payload,
                loading : false
            }
        case COUPON_ERROR:
            toast.error(action.payload, { autoClose: '1500' });
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
};

