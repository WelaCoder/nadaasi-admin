import { GET_ADMIN_ORDER , ERROR } from '../actions/types'
const initialState = {
    adminOrder: [],
    error: null
};

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_ADMIN_ORDER :
        return {
                ...state,
                adminOrder : action.payload
        };
        case ERROR:
            return {
                ...state,
                error : action.payload
            }
        default:
            return state;
    }

};
