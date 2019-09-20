const game = require("./game");

module.exports = app => {
  app.use("/games", game);
};
