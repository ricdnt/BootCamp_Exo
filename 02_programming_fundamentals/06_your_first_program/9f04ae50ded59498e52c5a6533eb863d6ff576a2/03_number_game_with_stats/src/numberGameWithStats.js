function numberGameWithStats(reader, min = 1, max = 10) {
  const numToFind = Math.round(Math.random() * (max - min) + min);

  let essai = 0;

  function newChoice (question) {



    reader.question(question, (answer) => {

      essai++;
      
      if (isNaN(answer)) {
        newChoice("This was not a number \n > ");
      }
      
      else if (answer < min || answer > max){
        newChoice(`number is between ${1} and ${10} \n > `);
      }

      else if (answer < numToFind) {
        newChoice("too low \n >");
      }

      else if (answer > numToFind) {
        newChoice("too high \n >");
      }

      else {
        console.log ("you won ! \n");
        console.log(`your number of attempt is ${essai}`);
        reader.close();
      }
    });
  }
  newChoice("what is your number ? \n > ");
}

module.exports = numberGameWithStats;
