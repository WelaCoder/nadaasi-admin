//
const express = require("express");
const fs = require("fs");
const router = express.Router();
const KlarnaV3 = require("@crystallize/node-klarna/v3");
const auth = require("../middleware/auth");
const CartItem = require("../model/CartItem");
const Order = require("../model/Order");
const config = require("config");
// Initiate the client

router.post("/", auth, async (req, res) => {
  let cart = await CartItem.find({ user: req.user.id }).populate("product");
  cart.forEach((c) => {
    // console.log(c.product);
  });
  let totalAmount = 0;
  let lines = cart.map((c) => {
    totalAmount += Number(c.quantity) * (Number(c.product.price) * 100);
    return {
      type: "physical",
      reference: "19-402-USA",
      name: c.product.name,
      quantity: Number(c.quantity),
      quantity_unit: "pcs",
      unit_price: Number(c.product.price) * 100,
      tax_rate: 0,
      total_amount: Number(c.quantity) * (Number(c.product.price) * 100),
      total_discount_amount: 0,
      total_tax_amount: 0,
    };
  });
  const client = new KlarnaV3({
    testDrive: true,
    username: "PK06420_1338d8456309",
    password: "jxgy2sGZnnLR7cuu",
  });

  const { success, order } = await client.createOrder({
    purchase_country: req.body.country.code,
    purchase_currency: "EUR",
    locale: "en-GB",
    order_amount: totalAmount,
    order_tax_amount: 0,
    order_lines: lines,
    merchant_urls: {
      terms: "https://www.example.com/terms.html",
      checkout: "https://www.example.com/checkout.html",
      confirmation: config.get("domain") + "/user",
      push: "https://www.example.com/api/push",
    },
  });
  if (success) {
    console.log(cart[0]);
    let userOrder = await Order.create({
      user: req.user.id,
      products: cart.map((c) => {
        return c;
      }),
      orderId: order.order_id,
      amount: totalAmount / 100,
      email: req.body.email,
      country: req.body.country,
      postalCode: req.body.postalCode,
      message: req.body.message,
      town: req.body.town,
    });
    cart.forEach(async (c) => {
      await CartItem.findByIdAndDelete(c._id);
    });
    // console.log(userOrder.products);
    fs.writeFile(
      "routes/views/" + req.user.id.toString() + ".html",
      order.html_snippet,
      function (err) {
        if (err) return console.log(err);
      }
    );
  }
  // console.log(order);
  res.json(order);
});

// router.get("/confirmation/:orderId", async (req, res) => {
//   const client = new KlarnaV3({
//     testDrive: true,
//     username: "PK06420_1338d8456309",
//     password: "jxgy2sGZnnLR7cuu",
//   });
//   console.log(req.params.orderId);
//   var order = await client.getOrder(req.params.orderId);
//   // order = await client.acknowledgeOrder(req.params.orderId);
//   order = await client.captureOrder(req.params.orderId);

//   console.log(order);
// });
router.get("/:userId", async (req, res) => {
  // let user = await User.findById(req.user.id);
  res.sendFile(__dirname + "/views/" + req.params.userId + ".html");
});
module.exports = router;
