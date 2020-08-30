const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  discountType: {
    type: String
  },
  value: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
},);

module.exports = Coupon = mongoose.model('coupons', couponSchema);