
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function fizzBuzz(array) {
  return array.map(function element(x) {

    if (x % 5 === 0 && x % 3 === 0) {
      return "FizzBuzz";

    }
    else if ( x % 3 === 0) {
      return "Fizz";
      
    }
    else if ( x % 5 === 0) {
      return "Buzz";
  
    }
    else return x;
  });
}


console.log(fizzBuzz(testArray));






// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;


