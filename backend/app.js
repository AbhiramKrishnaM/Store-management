require("dotenv").config();

// lib
const express = require("express");

// db init

const { startSequelize } = require("./config/DB.config.js");

// routes
const test = require("./routes/Test.js");
const user = require("./routes/User.js");

// server
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// use routes
app.use("/test", test);

app.use("/user", user);

// server listen and route
const port = process.env.APP_PORT || 4001;

startSequelize();

app.listen(port, () => {
  console.log("Application listening on port ", port);
});
