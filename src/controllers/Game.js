class Game {
  constructor() {
    this.gameId = Math.random();
  }
}

class Games {
  constructor() {
    this.games = [];
  }
  create({}) {
    const newGame = new Game();
    this.games.push(newGame);
    return newGame;
  }
}

module.exports = new Games();
