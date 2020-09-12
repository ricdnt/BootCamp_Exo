
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function double(array) {

  return array.map(x => x * 2);
}

console.log(double(testArray ));

// Do not remove last lines, it is for tests
module.exports = double;
