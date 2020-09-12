
function pow(number, power) {

  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

console.log(pow(2,2));


// do not remove this line, it is for tests
module.exports = pow;
