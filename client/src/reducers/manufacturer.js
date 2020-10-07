import { toast } from "react-toastify";

import {
    ADD_MANUFACTURER, DELETE_MANUFACTURER, LOAD_MANUFACTURERS
} from "../actions/types";

const initialState = {
    manufacturer: null,
    manufacturers: null,
    loading: false,
    error: null,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MANUFACTURER:
            return {
                ...state,
                manufacturers: state.manufacturers.filter(m => m._id != action.payload._id)
            }
        case ADD_MANUFACTURER:
            toast.success("Manufacturer is added Successfully", { autoClose: "1500" });
            return {

                ...state,
                loading: false,

            };
        case LOAD_MANUFACTURERS:
            return {
                ...state,
                manufacturers: action.payload,
            }

        default:
            return state;
    }
};
