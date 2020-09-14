function squareDigits(integer) {

  
  if (Number.isInteger(integer) === true) {
  
    const digits = integer.toString().split("");

      
    const squaredDigits = digits.map( n => n * n);

    const result = squaredDigits.join("");

    const newNum = Number.parseInt(result);

    const newNumIsAInteger = Number.isSafeInteger(newNum);

    if (newNumIsAInteger) {

      console.log(typeof newNum); //to check if this number is a real integer to pass the test.
      
      return newNum;};



    console.log(typeof newNum);

    //return squaredNum;

    //return squaredDigits;

    //return newNum;


  }
  else throw new Error ("error");

};

// Leave the line below for tests to work
module.exports = squareDigits;
