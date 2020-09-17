const car = require("./car");

car.start();

car.start().changeSpeed(130).drive(42).showDistance();

car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();

car.start().changeSpeed(130).showDistance();

car.start().drive(20).showDistance();

car.start().changeSpeed(100).drive(30).showDistance();

car.start().drive(30).changeSpeed(100).showDistance();

car.start().changeSpeed(100).drive(30).changeSpeed(50).drive(30).showDistance();

