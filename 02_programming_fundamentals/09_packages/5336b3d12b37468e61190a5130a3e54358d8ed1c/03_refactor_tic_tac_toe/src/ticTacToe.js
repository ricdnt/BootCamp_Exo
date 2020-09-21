const {Display} = require ("./display.js");
const {GameState} = require("./gameState.js");
const {Utilities} = require ("./utilities.js");

let ticTacToe = {

  // 1----------------------------------------
  rendercell: Display.rendercell(),

  // 2----------------------------------------
  renderrrow: Display.renderrow(),

  // 3----------------------------------------
  renderboard: Display.renderboard(),

  // 4----------------------------------------
  isnotnull: Utilities.isnotnull(),

  // 5----------------------------------------
  flattenarray: Utilities.flattenarray(),

  // 6----------------------------------------
  WINNING_COORDINATES: Utilities.WINNING_COORDINATES,
 
  // 7----------------------------------------
  state: GameState.state,

  // 8----------------------------------------
  currentplayer: GameState.currentplayer,

  handleinput: GameState.handleinput(),
  // 9----------------------------------------
  getcoordinate: GameState.getcoordinate(),

  // 10----------------------------------------
  updatestate: GameState.updatestate(),

  // 11----------------------------------------
  nextplayer: GameState.nextplayer(),

  // 12----------------------------------------
  playturn: GameState.playturn(),

  // 13----------------------------------------
  start: GameState.start(),

  // 14----------------------------------------
  gamefinished: GameState.gamefinished(),
  //15 ----------------------------------------
  haswinner: GameState.haswinner(),

};

ticTacToe.start();

module.exports = ticTacToe;
