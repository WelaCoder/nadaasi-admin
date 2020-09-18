import {
  SET_LOADING,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  SET_CHOOSEN_PRODUCT,
  ADD_TO_CART,
  SET_TOAST,
  LOAD_CART,
  DELETE_ITEM_FROM_CART,
  UPDATE_QUANTITY,
  SET_FILTER,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  AUTH_CUSTOMER_SUCCESS,
  LOAD_USER,
  AUTH_CUSTOMER_FAILURE,
  AUTH_CUSTOMER_LOGOUT,
  LOAD_ORDERS,
  CREATE_PAYMENT_SESSION,
  SET_CURRENT_ORDER,
  LOAD_DRESS_TYPES,
  SET_CURRENT_PAGE,
} from "../actions/types";
import { toast } from "react-toastify";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isAdmin: false,
  loading: true,
  user: null,
  products: null,
  filteredProducts: null,
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
  filters: {
    size: null,
    dressType: null,
    price: {
      min: 0,
      max: 3000,
    },
  },
  orders: null,
  currentOrder: null,
  currentPage: 1,
  dressTypeOptions: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DRESS_TYPES:
      return {
        ...state,
        dressTypeOptions: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };
    case CREATE_PAYMENT_SESSION:
      return {
        ...state,
        cart: [],
      };
    case LOAD_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case LOAD_USER:
      toast.success("User Login Successfully", { autoClose: "1500" });
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        isAdmin: false,
        user: action.payload,
      };
    case AUTH_CUSTOMER_SUCCESS:
      // toast.success("User Login Successfully", { autoClose: "1500" });
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isAdmin: false,
        loading: false,
      };
    case AUTH_CUSTOMER_FAILURE:
      toast.error(action.payload, { autoClose: "1500" });
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        users: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
      };
    case AUTH_CUSTOMER_LOGOUT:
      toast.success("User Logout Successfully", { autoClose: "1500" });
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        users: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
        cart: null,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: action.payload,
        },
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter((p) => {
          if (
            state.filters.dressType == null &&
            state.filters.size == null &&
            p.price >= state.filters.price.min &&
            p.price <= state.filters.price.max
          ) {
            return p;
          }
          for (let index = 0; index < state.filters.size?.length; index++) {
            const sizeFilter = state.filters.size[index];
            for (let index = 0; index < p.dressSize?.length; index++) {
              const product = p.dressSize[index];
              if (product == sizeFilter) {
                if (
                  state.filters.dressType == null ||
                  state.filters.dressType == "all" ||
                  (p.dressType == state.filters.dressType &&
                    p.price >= state.filters.price.min &&
                    p.price <= state.filters.price.max)
                ) {
                  return p;
                }
              }
            }
          }
          if (p.dressType == state.filters.dressType) {
            if (
              state.filters.size == null &&
              p.price >= state.filters.price.min &&
              p.price <= state.filters.price.max
            ) {
              return p;
            }
            for (let index = 0; index < state.filters.size?.length; index++) {
              const sizeFilter = state.filters.size[index];
              for (let index = 0; index < p.dressSize?.length; index++) {
                const product = p.dressSize[index];
                if (product == sizeFilter) {
                  if (
                    p.dressType == state.filters.dressType &&
                    p.price >= state.filters.price.min &&
                    p.price <= state.filters.price.max
                  ) {
                    return p;
                  }
                }
              }
            }
          }
        }),
      };
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((e) =>
          e._id == action.payload._id ? action.payload : e
        ),
      };
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
