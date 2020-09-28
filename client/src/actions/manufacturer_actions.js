import axios from "axios";
import { API } from "../constants/constants";
import { ADD_MANUFACTURER, ERROR, LOAD_MANUFACTURERS } from "./types";




export const addManufacturer = (body) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.post(`${API}/api/manufacturer`, body, config)
        dispatch({
            type: ADD_MANUFACTURER,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}


export const loadManufacturers = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.get(`${API}/api/manufacturer`)
        dispatch({
            type: LOAD_MANUFACTURERS,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}