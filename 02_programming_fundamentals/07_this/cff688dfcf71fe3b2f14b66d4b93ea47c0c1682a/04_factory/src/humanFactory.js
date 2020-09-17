
const human = {
  firstname: "johnn",
  lastName: "pozr",
  genre: "female",
  job: "driver",

  fullname: function () {
     console.log(`${this.firstname} ${this.lastname}`);
  },

  introduction: function() {
    //"Hello! My name is John Doe."
  }
};



const createHumans = ( object = {human}) => {
    


 return object;
};


const humanFactory = () => {};
  

console.log(human);

console.log(human.firstname);

console.log(createHumans());






module.exports = {
  humanFactory,
  createHumans,
};
