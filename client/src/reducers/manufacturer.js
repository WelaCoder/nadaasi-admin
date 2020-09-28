import { toast } from "react-toastify";

import {
    ADD_MANUFACTURER, LOAD_MANUFACTURERS
} from "../actions/types";

const initialState = {
    manufacturer: null,
    manufacturers: null,
    loading: false,
    error: null,
};
export default (state = initialState, action) => {
    switch (action.type) {
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
