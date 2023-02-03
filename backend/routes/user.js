/** User registration, authentication, deletion, updation   */

const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("User registration end");
});

router.post("/login", (req, res) => {
  res.send("User login end");
});

router.put("/update", (req, res) => {
  res.send("User details update end");
});

module.exports = router;
