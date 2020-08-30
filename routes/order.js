const router = require("express").Router();
const config = require("config");
const KlarnaV3 = require("@crystallize/node-klarna/v3");

const Product = require("../model/Product");
const Order = require("../model/Order");
const auth = require("../middleware/auth");
const verify = require("../middleware/verify")

// router.post("/", upload.array("images", 3), async (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ msg: "internal server error" });
//   }
// });
router.get("/", auth, async (req, res) => {
  try {
    let orders = await Order.find({
      user: req.user.id,
    });
    let placedOrders = [];
    const client = new KlarnaV3({
      testDrive: true,
      username: config.get("klarnaUsername"),
      password: config.get("klarnaPassword"),
    });
    for (let index = 0; index < orders.length; index++) {
      const element = orders[index];
      if (element.isPlaced) {
        placedOrders.push(element);
      } else {
        const { success } = await client.getOrder(element.orderId);
        const { acknowledgeOrderSuccess } = await client.acknowledgeOrder(
          element.orderId
        );

        // console.log(success);
        if (success) {
          placedOrders.push(element);
          element.isPlaced = true;
          element.isAcknowledged = true;
          await element.save();
        } else {
          await Order.findByIdAndDelete(element._id);
        }
      }
    }

    // console.log(placedOrders);
    res.json({ orders: placedOrders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.get("/:id", auth, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);

    // console.log(placedOrders);
    res.json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.get('/admin', auth, verify.isAdmin, async (req, res) => {
    try {
      const order = await Order.find()
      console.log(order)
      res.json(order);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Server error');
    }
});

module.exports = router;
