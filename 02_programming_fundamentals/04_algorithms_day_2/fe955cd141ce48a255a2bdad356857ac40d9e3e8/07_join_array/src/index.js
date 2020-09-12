
const testArray = [ "A", "B", "C"];

const testSeparator = ["-"];


function joinArray(list, sep) {
  
  return list.reduce((prev,curr) => prev + sep + curr);
}

console.log(joinArray(testArray, testSeparator));


// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
