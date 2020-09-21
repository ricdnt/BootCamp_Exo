

let Utilities = {
  // 4----------------------------------------
  isnotnull: function isNotNull(value) {
    return value !== null;
  },

  // 5----------------------------------------
  flattenarray: function flattenArray(arrayOfArray) {
    return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
  },

  // 6----------------------------------------
  WINNING_COORDINATES: [
    [
      { letter: "a", digit: "0" },
      { letter: "a", digit: "1" },
      { letter: "a", digit: "2" },
    ],
    [
      { letter: "b", digit: "0" },
      { letter: "b", digit: "1" },
      { letter: "b", digit: "2" },
    ],
    [
      { letter: "c", digit: "0" },
      { letter: "c", digit: "1" },
      { letter: "c", digit: "2" },
    ],
    [
      { letter: "a", digit: "0" },
      { letter: "b", digit: "1" },
      { letter: "c", digit: "2" },
    ],
    [
      { letter: "a", digit: "2" },
      { letter: "b", digit: "1" },
      { letter: "c", digit: "0" },
    ],
    [
      { letter: "a", digit: "0" },
      { letter: "b", digit: "0" },
      { letter: "c", digit: "0" },
    ],
    [
      { letter: "a", digit: "1" },
      { letter: "b", digit: "1" },
      { letter: "c", digit: "1" },
    ],
    [
      { letter: "a", digit: "2" },
      { letter: "b", digit: "2" },
      { letter: "c", digit: "2" },
    ],
  ],

};

module.exports = Utilities;