import { combineReducers } from "redux";

import appReducer from "./appReducer";
import adminOrder from "./adminOrder";
import auth from "./auth"
import adminauth from "./adminauth"
import coupon from "./coupon"
import feedback from "./feedback"
import MerchantReturn from "./merchantReturn"
export default combineReducers({
  app: appReducer,
  coupon,
  adminOrder,
  auth,
  adminauth,
  feedback,
  MerchantReturn,
  
});
