const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("Hey there!!");
});

router.post("/post", (req, res) => {
  res.send(`Hello ${req.body.name}! nice to meet you.`);
});

module.exports = router;
