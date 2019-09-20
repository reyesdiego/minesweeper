const Cell = require("./Cell");

function Board({ rows, cols }) {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      //TODO improve random. Will receive a param with MAX amount of mines
      let newCell = new Cell({ row, col, mined: Math.random() >= 0.5 });
      Object.defineProperty(this, `${row}.${col}`, {
        get: function() {
          return newCell;
        },
        set: function(newValue) {
          newCell = newValue;
        },
        enumerable: true,
        configurable: true
      });
    }
  }
  this.rows = rows;
  this.cols = cols;
}
Board.prototype.toJSON = function() {
  const response = {};
  for (var va in this) {
    response[va] = this[va];
  }
  return response;
};

module.exports = Board;
