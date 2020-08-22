import {
  SET_LOADING,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  SET_CHOOSEN_PRODUCT,
  ADD_TO_CART,
  SET_TOAST,
  LOAD_CART,
  DELETE_ITEM_FROM_CART,
} from "../actions/types";

const initialState = {
  products: [],
  loadingProducts: true,
  choosenProduct: {
    _id: null,
    color: null,
    size: null,
    quantity: 1,
  },
  cart: null,
  currentProduct: null,
  toastMessage: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c._id != action.payload._id),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_TOAST:
      return {
        ...state,
        toastMessage: action.payload,
      };
    case SET_CURRENT_PRODUCT:
      var currentProduct;
      for (let index = 0; index < state.products.length; index++) {
        const element = state.products[index];
        if (element._id == action.payload) {
          currentProduct = element;
          console.log(element);
        }
      }
      return {
        ...state,
        currentProduct: currentProduct == null ? null : currentProduct,
      };
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
    case SET_CHOOSEN_PRODUCT:
      return {
        ...state,
        choosenProduct: {
          ...state.choosenProduct,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
