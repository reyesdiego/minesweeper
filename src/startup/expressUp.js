const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const http = require("http");
const { PORT } = require("../constants");

const expressUp = () => {
  const app = express();

  app.disable("x-powered-by");
  app.use(cors());
  app.use(compression({ level: 1 }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.status(200).send({ hi: "Minesweeper" });
  });

  const server = http.createServer(app);
  //TODO put port in constants file

  server.listen(PORT, () =>
    console.log(
      `API running on port ${PORT}. (${process.version}) pid:${
        process.pid
      } - ${new Date()}`
    )
  );
};

module.exports = expressUp;
