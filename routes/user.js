const express = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../model/User");

const auth = require("../middleware/auth");
const verify = require("../middleware/check");

const router = express.Router();

router.post(
  "/signup",
  [
    check("firstname", "Firstname is required").not().isEmpty(),
    check("lastname", "Lastname is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }
    const { firstname, lastname, email, password } = req.body;
    let user;
    try {
      // finding exsisting USers
      user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // Registring USers
      user = new User({
        firstname,
        lastname,
        email,
        password,
      });
      console.log("object");
      const salt = await bcrypt.genSalt(10);
      console.log("object");
      user.password = await bcrypt.hash(password, salt);
      // saving user in database
      await user.save();

      // return jwt token

      payload = {
        user: {
          id: user.id,
          admin: false,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtsecret"),
        {
          expiresIn: "364d",
        },
        (error, token) => {
          if (error) throw error;
          res.json({
            token,
          });
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  }
);
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }
    const { email, password } = req.body;
    let user;
    try {
      user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      payload = {
        user: {
          id: user.id,
          admin: false,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtsecret"),
        {
          expiresIn: "364d",
        },
        (error, token) => {
          if (error) throw error;
          res.json({
            token,
          });
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  }
);
router.get("/", auth, verify.notAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server Error" });
  }
});
module.exports = router;
