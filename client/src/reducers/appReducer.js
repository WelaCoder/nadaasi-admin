import { SET_LOADING, GET_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  loadingProducts: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loadingProducts: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
