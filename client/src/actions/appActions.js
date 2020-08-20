import axios from "axios";

import { Add_PRODUCT } from "./types";

export const addProduct = () => async (dispatch) => {
  try {
    console.log("add product");
    const res = await axios.post("/api/product");
  } catch (error) {
    console.log(error);
  }
};
