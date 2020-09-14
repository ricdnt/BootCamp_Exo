// A function that takes two parameters, the second one being a callback function

const getInput = (userInput, fn) => {
  const newUser = {
    ...userInput,
    profession: "driver",
  };

  fn(newUser.key);

};


// Leave the line below for tests to work
module.exports = getInput;
