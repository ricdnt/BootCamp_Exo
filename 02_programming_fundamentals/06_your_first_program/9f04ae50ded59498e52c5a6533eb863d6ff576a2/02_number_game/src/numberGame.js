
//generate random number
function generateNumber(min = 1, max = 100) {

  return Math.round(Math.random() * (max - min) + min);

};



// main function
function numberGame(reader, min = 1, max = 100) {

  //const numToFind = generateNumber(max);
  const numToFind = Math.round(Math.random() * (max - min) + min);

  function newChoice (question) {

    reader.question(question, (fillNumber) => {

      if (isNaN(fillNumber)) {
        newChoice("This was not a number");
      }
      else if (fillNumber < min || fillNumber > max){
        newChoice(`number is between ${1} and ${100}`);
      }

      else if (fillNumber < numToFind) {
        newChoice("too low");
      }

      else if (fillNumber > numToFind) {
        newChoice("too high");
      }

      else {
        console.log ("you won !");
        reader.close();
      }
    });
  }
  newChoice("what is your number ? \n > ");

}



module.exports = numberGame;

/*
//find the numer by dichotomie
function dichotomie () {

  reader.question("choose a number ? \n >", (integer) => {

  const NumToFind = generateNumber(100);

  console.log(NumToFind);

  console.log("cc");

  if (integer > NumToFind) {
    console.log("too high");
    dichotomie(NumToFind, integer);
  }
  else if (integer < NumToFind) {
    console.log("too low");
    
    dichotomie(NumToFind, integer);
  }
  else { return  "You won !"};

  reader.close();
  });
};

dichotomie();
*/