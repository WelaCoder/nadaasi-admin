import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../constants/constants";
import { ADD_MANUFACTURER, ERROR, LOAD_MANUFACTURERS, EDIT_MANUFACTURER, SET_CURRENT_MANUFACTURER, DELETE_MANUFACTURER } from "./types";




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
        if(error.response.data.message){
            toast.error(error.response.data.message);
        }
        dispatch({
            type: ERROR
        })
    }
}


export const editManufacturer = (body, id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.put(`${API}/api/manufacturer/${id}`, body, config)
        dispatch({
            type: EDIT_MANUFACTURER,
            payload: res.data,
        })
        toast.success('Successfully updated manufacturer...')
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}

export const deleteManufacturer = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.delete(`${API}/api/manufacturer/${id}`)
        dispatch({
            type: DELETE_MANUFACTURER,
            payload: res.data,
        })
        toast.success('Successfully deleted manufacturer...')
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}

export const setCurrentManufacturer = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.get(`${API}/api/manufacturer/${id}`)
        dispatch({
            type: SET_CURRENT_MANUFACTURER,
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