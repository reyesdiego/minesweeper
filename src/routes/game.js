const express = require("express");
const router = express.Router();
const Games = require("../controllers/Game");

router.post("/", (req, res) => {
  res.status(200).send(Games.create(req.body));
});

module.exports = router;
