require("dotenv").config();

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Application listening on port ", port);
});
