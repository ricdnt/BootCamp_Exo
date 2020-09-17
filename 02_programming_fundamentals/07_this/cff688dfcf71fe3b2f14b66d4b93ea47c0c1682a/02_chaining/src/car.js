const car = {

  speed: 0, // vitesse
  minutes: 0, // temps
  distance: 0, // distance

  start: function (){
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    return this;
  },

  changeSpeed: function (speed){
    this.speed = speed;
    return this;
  },

  drive: function (minutes) {
    
    this.minutes = minutes;
    this.distance = this.distance + (this.speed * (this.minutes /60));
    
    return this;
  },

  showDistance: function (){
  
    console.log(`${this.distance} Km`);

    return this;
  },
};
/*
car.start().changeSpeed(100).drive(30).showDistance();

car.start().drive(30).changeSpeed(100).showDistance();*/

//console.log(car.speed);
//console.log(car.start().drive(130));


//console.log(car.start().changeSpeed(130).drive(45));

//console.log(car.showDistance());



//console.log(car.showDistance());

//console.log(car.start().changeSpeed(130).drive(42).showDistance());


//console.log(car.minutes);

//console.log(car.start());


module.exports = car;
