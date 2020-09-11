function range(parameter1, parameter2) {
  const arrayRange = [];
  if (parameter1 < parameter2) {
    for (let i = parameter1; i<= parameter2; i++) {
      arrayRange.push(i);
    }
  }

  else {
    for (let i = parameter1; i >= parameter2; i--) {
      arrayRange.push(i);
    }
  }
  return arrayRange;
}

const test = range(2,7);

console.log(test);

//else return ("you can't have a range of one number!")


// Do not remove last lines, it is for tests
module.exports = range;
