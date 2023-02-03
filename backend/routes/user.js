/** User registration, authentication, deletion, updation   */
const express = require("express");

// controller
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controller/User.js");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/update", updateUser);

router.delete("/destroy", deleteUser);

module.exports = router;
