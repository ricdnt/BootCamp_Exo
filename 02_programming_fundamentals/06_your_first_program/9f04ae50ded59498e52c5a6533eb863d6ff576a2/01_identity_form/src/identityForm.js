


const identityForm = (reader) => {
  reader.question( "first name \n >", (firstName) => {
  
    reader.question( "last name \n >", (lastName) => {
  
      reader.question( "your age ?\n >", (age) => {
  
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  });


};

// Leave line below for tests to work
module.exports = identityForm;
