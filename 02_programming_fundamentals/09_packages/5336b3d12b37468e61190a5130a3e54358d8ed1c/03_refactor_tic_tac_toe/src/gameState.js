const {Display} = require("./display.js");
const {Utilities} = require("./utilities");
const {ticTacToe} = require("./ticTacToe");


let GameState = {
  // 7----------------------------------------
  state: {
    a: Array(3).fill(null),
    b: Array(3).fill(null),
    c: Array(3).fill(null),
  },

  // 8----------------------------------------
  currentplayer: null, // challenge this value !!! not sure at all !!

  handleinput: function handleInput(input) {
    const coordinate = this.getcoordinate(input);
    if (coordinate) {
      this.updatestate(coordinate);
      if (this.haswinner()) {
        console.log(Display.renderboard(this.state));
        console.log(`Congratulations ${this.currentplayer}, you won! ＼(＾O＾)／`);
        ticTacToe.reader.close();
      } else if (this.gameisfinished(this.state)) {
        console.log(Display.renderboard(this.state));
        console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
        ticTacToe.reader.close();
      } else {
        this.nextplayer();
        this.playturn();
      }
    } else {
      console.log("This is not a valid move");
      this.playturn();
    }
  },

  // 9----------------------------------------
  getcoordinate: function getCoordinate(input) {
    const letter = input[0];
    const digit = input[1] - 1;
  
    if (this.state[letter] && this.state[letter][digit] === null) {
      return { letter: letter, digit: digit };
    } else {
      return null;
    }
  },

  // 10----------------------------------------
  updatestate: function updateState(coordinate, player) {
    const line = this.state[coordinate.letter]; // coordinate is an object so ok.
  
    line[coordinate.digit] = this.currentplayer;  
  },

  // 11----------------------------------------
  nextplayer: function nextPlayer() {
    if (this.currentplayer === "X") {
      this.currentplayer = "O";
    } else {
      this.currentplayer = "X";
    }
  },

  // 12----------------------------------------
  playturn: function playTurn() {
    console.log(Display.renderBoard(this.state));
    ticTacToe.reader.question(`${this.currentplayer}: What is your move? e.g: a1\n`, this.handleinput);
  },

  // 13----------------------------------------
  start: function start() {
    this.currentplayer = ["X", "O"][Math.round(Math.random())];
  
    this.playturn();
  },

  // 14----------------------------------------
  gamefinished: function gameIsFinished(state) { //this.state provoque à priori une erreur donc à tester
    const allValues = Utilities.flattenArray(Object.values(this.state));

    return allValues.every(Utilities.isNotNull);
  },


  // 15----------------------------------------
  haswinner: function hasWinner() {
    const isWinningLine = (line) => { // line is an array
      const pattern = line.map((coordinate) => this.state[coordinate.letter][coordinate.digit]).join("");
  
      return pattern === "XXX" || pattern === "OOO";
    };
  
    return Utilities.WINNING_COORDINATES.some(isWinningLine);
  },
};

module.exports = GameState;