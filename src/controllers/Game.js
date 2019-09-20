const Board = require("./Board");

class Game {
  constructor(rows, cols) {
    this.gameId = Math.random();
    this.board = new Board({ cols, rows });
  }
}

class Games {
  constructor() {
    this.games = [];
  }
  create({rows,cols}) {
    const newGame = new Game(rows,cols);
    this.games.push(newGame);
    return newGame;
  }
}

module.exports = new Games();
