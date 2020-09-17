const machine = {
  
  litersOfCoffee: 0,
  //expresso: true,
  //longCoffee: true,

  fillWithLitersOfCoffee: function (liters){
    this.litersOfCoffee = this.litersOfCoffee + liters;
    return this;
  
  },

  expresso: function () {

    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    }
    return false;
    
  },

  longCoffee: function (){

    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    }
    return false;      

  }


};

module.exports = machine;

/*
machine.fillWithLitersOfCoffee(10);
console.log(machine.litersOfCoffee); // => 10
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
*/