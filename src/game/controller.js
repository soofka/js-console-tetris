const { Directions } = require('./constants');
const Game = require('./game');

class Controller {
  constructor(config) {
		this.game = new Game(config.GAME, config.CONTROLS);
		this.handleInputListener = (event) => this.handleInput(config.CONTROLS, this.game, event);
  }

	start() {
		document.addEventListener('keydown', this.handleInputListener);
		this.game.start();
	}

	stop() {
		document.removeEventListener('keydown', this.handleInputListener);
		this.game.stop();
	}

	handleInput(controls, game, event) {
		switch(event.code) {
			case controls.MOVE_TETRINO_LEFT:
				game.moveTetrino(Directions.Left);
				break;

			case controls.MOVE_TETRINO_RIGHT:
				game.moveTetrino(Directions.Right);
				break;

			case controls.ROTATE_TETRINO:
				game.rotateTetrino();
				break;
				
			case controls.DROP_TETRINO:
				game.dropTetrino();
				break;

			case controls.PAUSE:
				game.isRunning() ? game.stop() : (game.isOver() ? game.restart() : game.start());
				break;

			default:
				break;
		}
	}
}

module.exports = Controller;
