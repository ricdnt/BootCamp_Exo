
let Display = {

  // 1----------------------------------------
  rendercell: function renderCell (cell)  {
    if (cell === null) {
      return "_";
    } else {
      return cell;
    }
  },

  // 2----------------------------------------
  renderrow: function renderRow(letter, state)  {
    const cells = state[letter];
  
    const row = cells.map(this.rendercell).join(" | ");
  
    return `${letter} ${row}`;
  },

  // 3----------------------------------------
  renderboard: function renderBoard(state)  { 
    const letters = Object.keys(state);
  
    const rows = letters.map((letter) => this.renderrow(letter, state)).join("\n");
  
    const header = "  1   2   3";
  
    return `${header}\n${rows}`;
  },
};



module.exports = Display;