const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const http = require("http");

const expressUp = () => {
  const app = express();

  app.get("/", (req, res) => {
    res.status(200).send({ hi: "there" });
  });

  app.listen(3000, (err, host) => {
    console.log(host);
  });
};

module.exports = expressUp;
