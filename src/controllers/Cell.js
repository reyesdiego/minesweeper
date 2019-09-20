class Cell {
  constructor({ row, col, mined }) {
    this.opened = false;
    this.mined = mined || false;
    this.col = col;
    this.row = row;
  }
  setOpen() {
    this.opened = true;
  }
  setMines(count) {
    this.mines = count;
  }
}

module.exports = Cell;
