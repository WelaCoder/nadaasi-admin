import { 
    GET_MARCHANT_RETURN_REQUEST,
    ERROR
} from '../actions/types'
const initialState = {
    returnRequest: [],
    loading : true,
    error: null
};

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_MARCHANT_RETURN_REQUEST :
        return {
                ...state,
            returnRequest: action.payload,
            loading:false
        };
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading:false
            }
        default:
            return state;
    }

};
