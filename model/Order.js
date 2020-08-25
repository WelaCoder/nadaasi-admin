const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  products: [],
  country: {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
  },
  isPlaced: {
    type: Boolean,
  },
  isAcknowledged: {
    type: Boolean,
  },
  status: {
    type: String,
    default: "Awaiting",
  },
  town: {
    type: String,
  },
  message: {
    type: String,
  },
  postalCode: {
    type: String,
  },

  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = Order = mongoose.model("order", OrderSchema);
