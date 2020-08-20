// const express = require("express");
// const { check, validationResult } = require("express-validator");

// const upload = require("../upload");

// const Product = require("../model/Product");

// // const router = express.Router();

// // router.post(
// //   "/",
// //   //   auth,
// //   //   check("image", "Email is required").not().isEmpty(),
// //   //   check("productname", "productname is required").not().isEmpty(),
// //   //   check("price", "price is required").not().isEmpty(),
// //   //   upload.array("images", 3),
// //   (res, req) => {
// //     const {
// //       productname,
// //       price,
// //       dresstype,
// //       dresssize,
// //       dresscolore,
// //       closure,
// //       fabric,
// //       lenght,
// //       neckline,
// //       wasitlined,
// //       details,
// //     } = req.body;
// //     var images = [];
// //     for (let index = 0; index < req.files.length; index++) {
// //       const element = req.files[index];
// //       images.add(element);
// //     }
// //     print(images);
// //     // const product = new Product({});
// //     try {
// //     } catch (error) {}
// //   }
// // );
const router = require("express").Router();

// @route /api/auth/
// @desc get a logged in user
// @access private
router.post("/", async (req, res) => {
  try {
    console.log("object");
    res.status(200);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "internal server error" });
  }
});

// @route POST /api/auth/
// @desc log in a user
// @access public

// @route /api/auth/
// @desc get a logged in user
// @access public
// router.get("/", (req, res) => {
//   return res.send("get a logged in user");
// });

module.exports = router;
