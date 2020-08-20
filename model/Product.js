const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: [
    {
      type: String,
      required: true,
    },
  ],
  productname: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  dresstype: {
    type: String,
    required: true,
  },
  dresssize: {
    type: String,
    required: true,
  },
  dresscolor: {
    type: String,
    required: true,
  },
  productdetails: {
    closure: {
      type: String,
      required: true,
    },
    fabric: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    neckline: {
      type: String,
      required: true,
    },
    wasitlined: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    modelheightsize: {
      type: String,
      required: true,
    },
  },
});
module.exports = Product = mongoose.model("productr", ProductSchema);
