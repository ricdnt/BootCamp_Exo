// ## Iteration on arrays
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each values of the table.

const literalDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (let i = 0; i < literalDigits.length; i++){
  console.log(literalDigits[i]);
}


/// autre moyen d'écrire une boucle FOR
/* for (const literalDigit of literalDigits) {
    console.log(literalDigit);
}*/


