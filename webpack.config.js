const path = require('path');

module.exports = {
  entry: './src/game/index.js',
  output: {
    filename: 'tetris.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'production',
};
