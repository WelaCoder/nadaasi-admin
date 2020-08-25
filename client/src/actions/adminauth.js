import axios from "axios";

import {
    LOGIN_ADMIN,
    LOAD_ADMIN,
    ADMIN_LOGOUT,
    ADMIN_LOGIN_ERROR
} from "./types";
import setAuthToken from '../utils/setAuthtoken'
// get admin
export const getAdmin = () => async (dispatch) => {
    try
    {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            
        }
        const res = await axios.get('/api/admin');
        dispatch({
            type: LOAD_ADMIN,
            payload: res.data
        });
        
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_ERROR
        });
    }
}
 //admin login
export const adminLogin = ({ email, password }) => async (dispatch) =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ email, password })
        const res = await axios.post('/api/admin/login', body, config)
        dispatch({
            type: LOGIN_ADMIN,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_ERROR
        });
    }
};
//admin logout
export const  adminLogOut = () => async (dispatch) => {
    dispatch({
        type : ADMIN_LOGOUT
      })  
  }
  