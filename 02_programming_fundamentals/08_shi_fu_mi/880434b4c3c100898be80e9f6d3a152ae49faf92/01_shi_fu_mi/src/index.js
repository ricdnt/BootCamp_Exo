const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // MOVES ------------------
  const moves = {
      rock : [
        "    ________        ",
      "---'   _ ,  |       ",
      "      (__(__)       ",
      "      (_____)       ",
      "      (____)        ",
      "---.__(___)         ",
    ],
      paper:  [
        "      _______       ",
        "----'    ____)____  ",
        "            _______)",
        "            _______)",
        "           _______) ",
        "----.__________)    ",
    ],
      scissor: [
        "    ____           ",
      "---'    |________  ",
      "     (__)________) ",
      "        _________) ",
      "      (____)       ",
      "---.__(___)        ",
    ],
}

const movesKey = Object.keys(moves);

// USER ------------------
const choiceByUser = moves;

const userArrayKey = Object.keys(choiceByUser);

const userArrayValue = Object.entries(choiceByUser);

const userScore = {
    score: 0,
    set: 0,
};

// MACHINE ----------------------------
const choiceByMachine = moves;

const machineArrayKey = Object.keys(choiceByMachine);

const machineArrayValue = Object.entries(choiceByMachine);

const machineScore = {
    score: 0,
    set: 0,
 };
 
/* failed to do this module :(
const machineInvertedInput = machineArrayValue[machineInput - 1][1];

console.log(machineInvertedInput);
*/

/*const machineReversLine = (array) {

    const lineDivider = 
}*/

// --------------------------------------
let setCount = 1;
  
  //Calculte machine input
  function randomInput () {
      return Math.ceil(Math.random() * 3);
  };
  
  // main function
  function playTheGame (phrase){

    //module multiset: play in 3 winning sets
    function multiSet (){

        if (setCount <= 3) {

        reader.question("Do you want to play in 3 sets (y / n) ? \n", (answer) => {
            if (answer === "y") {
                setCount ++;
                machineScore.score = 0;
                userScore.score = 0;
                return playTheGame(`Go ! \nChoose:\n  1-${movesKey[0]} \n  2-${movesKey[1]} \n  3-${movesKey[2]} \n > `);
            }
            else {
                console.log ("End of the game bye-bye");
                reader.close();
            }
        });
        }
        else  {
            if (machineScore.set > userScore.set) {
                console.log ("The machine wins, it is a machine !!!")
                reader.close();
            }
            else {
                console.log ("You win, your are a machine !!!")
                reader.close();
            }
        }   
    };

    //module machine winner
    function machineWinner () {
              console.log(`Set ${setCount} \n`);
              console.log("the machine wins !!");
              machineScore.set ++;
              console.log("Machine score: " + (machineScore.score = machineScore.score + 1));

              if (userScore.score > 2 || machineScore.score > 2){
                multiSet();
              }
              else {playTheGame(`Go ! \nChoose:\n  1-${movesKey[0]} \n  2-${movesKey[1]} \n  3-${movesKey[2]} \n > `)};
    };

    //module user winner
    function userWinner () {
        console.log(`Set ${setCount} \n`);
              console.log("you win !!");
              userScore.set ++;
              console.log("userscore: " + (userScore.score = userScore.score + 1));

              if (userScore.score > 2 || machineScore.score > 2){
                multiSet();
              }
              else {playTheGame(`Go ! \nChoose:\n  1-${movesKey[0]} \n  2-${movesKey[1]} \n  3-${movesKey[2]} \n > `)};
    };

    //module Shifumi
    function shifumi (machineInput, userAnswer) {

          if (machineInput === userAnswer) {
              console.log(`Set ${setCount} \n`);
              console.log("equality, no point !! play again !");
              playTheGame(`Go ! \nChoose:\n  1-${movesKey[0]} \n  2-${movesKey[1]} \n  3-${movesKey[2]} \n > `);
            }
          else if (machineInput === 1 && userAnswer === 3) {
            machineWinner();
            }
          else if (machineInput === 1 && userAnswer  === 2) {
            userWinner();
            }
          else if (machineInput === 2 && userAnswer  === 1) {
            machineWinner();
            }
          else if (machineInput === 2 && userAnswer  === 3) {
            userWinner();
            }
          else if (machineInput === 3 && userAnswer  === 2) {
            machineWinner();
            }
          else if (machineInput === 3 && userAnswer  === 1) {
            userWinner();
            }
      };
      
  reader.question( phrase, (answer) => {
      
      // User input 
      const userAnswer = Number.parseInt(answer);
      
      // User symbol
      console.log(userArrayValue[userAnswer - 1][1].join("\n"));

      // Machine input
      const machineInput = randomInput();

      // Machine invert symbol // fail !! :(
      //const machineInvertedInput = machineArrayValue[machineInput - 1][1];
      
      console.log(machineArrayValue[machineInput - 1][1].join("\n"));
     
      //Conditions accès function shifumi
      if (userAnswer > 3 || userAnswer < 1) {
          console.log ("Choice a number 1, 2 or 3");
          playTheGame(`Let 's play ! \n \nChoose:\n  1-${movesKey[0]} \n  2-${movesKey[1]} \n  3-${movesKey[2]} \n > `);
      }
        else shifumi(machineInput, userAnswer);
  
  });
  };
  
  console.log ("\n > Welcome to the best play ! 🕺  \n  ");
  
  playTheGame(`Let 's play ! \n \nChoose:\n  1-${movesKey[0]} \n  2-${movesKey[1]} \n  3-${movesKey[2]} \n > `);
  
  
  
  
  
  
  
  
  
  
  






