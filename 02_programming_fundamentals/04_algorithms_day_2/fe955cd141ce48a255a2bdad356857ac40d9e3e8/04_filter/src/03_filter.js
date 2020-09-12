
const testarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function picEvenNumbers(integer) {

  if (integer % 2 !== 0){
    return false;
  }
  else return true;
}


function filter(array, fn) {

  return array.filter(fn);

}

console.log(filter(testarray, picEvenNumbers));


// do not remove this line, it is for tests
module.exports = filter;
