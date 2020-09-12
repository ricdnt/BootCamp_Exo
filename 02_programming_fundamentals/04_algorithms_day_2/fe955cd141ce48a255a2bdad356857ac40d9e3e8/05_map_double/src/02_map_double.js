
const testArray = [1, 3, 1, 4];


function double(integer) {
  return integer * 2;
}

function map(arrayOfInteger, fn) {
  
  return arrayOfInteger.map(fn);
}

console.log(map(testArray, double));


// Do not remove last lines, it is for tests
module.exports = { double: double, map: map };
