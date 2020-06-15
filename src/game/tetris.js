const GameController = require('./controller');

class Tetris {
  constructor() {

  }

  start(config) {
    this.gameController = new GameController(config);
    this.gameController.start();
  }

  stop() {
    this.gameController.stop();
    this.gameController = undefined;
  }

  pause() {
    this.gameController.stop();
  }

  continue() {
    this.gameController.start();
  }
}

module.exports = Tetris;
