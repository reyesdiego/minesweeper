const Board = require("./Board");
const Cell = require("./Cell");

class Game {
  constructor(rows, cols) {
    this.gameId = Math.random();
    this.board = new Board({ cols, rows });
    this.isOver = false;
  }
  setGameOver() {
    this.isOver = true;
  }
}

class Games {
  constructor() {
    this.games = [];
  }
  create({ rows, cols }) {
    const newGame = new Game(rows, cols);
    this.games.push(newGame);
    return newGame;
  }

  open({ gameId, cellId }) {
    let game = this.games.filter(x => x.gameId === gameId)[0];
    const cell = game.board[cellId];
    if (cell instanceof Cell && cell.mined) {
      for (let cel in game.board) {
        if (game.board[cel] instanceof Cell && game.board[cel].mined) {
          game.board[cel].setOpen();
        }
      }
      game.setGameOver();
    } else {
      cell.setOpen();
      let row;
      let col;
      let minesCnt = 0;

      //Counting neightbour mines

      //if mined left - mined up-left - mined down-left
      col = cell.col - 1;
      if (col >= 0) {
        if (!!game.board[`${cell.row}.${col}`].mined) {
          minesCnt++;
        }
        row = cell.row - 1;
        if (row >= 0) {
          if (!!game.board[`${row}.${col}`].mined) {
            minesCnt++;
          }
        }
        row = cell.row + 1;
        if (row < game.board.rows) {
          if (!!game.board[`${row}.${col}`].mined) {
            minesCnt++;
          }
        }
      }
      //if mined right - mined up-right - mined down-right
      col = cell.col + 1;
      if (col < game.board.cols) {
        if (!!game.board[`${cell.row}.${col}`].mined) {
          minesCnt++;
        }
        row = cell.row - 1;
        if (row >= 0) {
          if (!!game.board[`${row}.${col}`].mined) {
            minesCnt++;
          }
        }
        row = cell.row + 1;
        if (row < game.board.rows) {
          if (!!game.board[`${row}.${col}`].mined) {
            minesCnt++;
          }
        }
      }
      //if mined up
      row = cell.row - 1;
      if (row >= 0) {
        if (!!game.board[`${row}.${cell.col}`].mined) {
          minesCnt++;
        }
      }
      //if mined down
      row = cell.row + 1;
      if (row < game.board.rows) {
        if (!!game.board[`${row}.${cell.col}`].mined) {
          minesCnt++;
        }
      }
      cell.setMines(minesCnt);
    }
    return game;
  }
}

module.exports = new Games();
