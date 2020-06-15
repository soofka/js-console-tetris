const { GameConfig } = require('./constants');
window.TETRIS_CONFIG = GameConfig;

const Tetris = require('./tetris');
const tetris = new Tetris();

window.Tetris = {
  start: () => tetris.start(window.TETRIS_CONFIG),
  stop: () => tetris.stop(),
  restart: () => {
    tetris.stop();
    tetris.start(window.TETRIS_CONFIG);
  },
  pause: () => tetris.pause(),
  continue: () => tetris.continue(),
};
