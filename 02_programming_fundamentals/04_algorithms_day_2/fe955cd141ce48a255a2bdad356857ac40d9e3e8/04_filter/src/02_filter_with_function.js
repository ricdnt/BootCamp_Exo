
// First fonction return a boolean true if an even number

const testarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function evenNumber
function picEvenNumbers(integer) {

  const tab = [];

  if (integer % 2 !== 0){
    return false;
  }
  else return true;

}


// call picEvenNUmbers in this fct.

function filter(array,fn) {

  const result1 = [];
  const result2 = [];

  const tab1 = array;
  const tab2 = array.map(fn);

  for (let i = 0; i <= tab2.length; i++) {
    if (tab2[i] === true) {
      result1.push(tab1[i]);
    }
    else result2.push(tab1[i]);
  }

  return result1;
}

console.log(filter(testarray, picEvenNumbers));



// do not remove this line, it is for tests
module.exports = filter;
