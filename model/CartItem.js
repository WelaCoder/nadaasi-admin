const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  size: {
    type: String,
    // required: true,
  },
  product: {
    type: Object,
    required: true,
  },
  unit: {
    type: String,
  },
  color: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  neck: {
    type: String,
  },
  bust: {
    type: String,
  },
  overBust: {
    type: String,
  },
  underBust: {
    type: String,
  },
  hips: {
    type: String,
  },
  neckToHeel: {
    type: String,
  },
  neckToAboveHeel: {
    type: String,
  },
  aboveKneeToAnkle: {
    type: String,
  },
  armLength: {
    type: String,
  },
  shoulderSeam: {
    type: String,
  },
  armHole: {
    type: String,
  },
  bicep: {
    type: String,
  },
  foreArm: {
    type: String,
  },
  wrist: {
    type: String,
  },
  vNeckCut: {
    type: String,
  },
  shoulderToWaist: {
    type: String,
  },
  waistToAboveKnee: {
    type: String,
  },
  hip: {
    type: String,
  },
});

module.exports = CartItem = mongoose.model("cartItem", CartItemSchema);
