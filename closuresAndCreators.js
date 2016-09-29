

function createCar(newMake, newModelYear, newColor) {
  var speed = 0;
  return {
    make: newMake,
    modelYear: newModelYear,
    color: newColor,
    getData: function() { return this.make + " released in " + this.modelYear + " in the color " + this.color;},
    getSpeed: function() { return "Your current speed is " + speed + " mph";},
    brake: function() { speed = speed - 7;},
    accelerate: function() {speed = speed + 10;}
  };
};

 ///End of Story 1 & 2
 function createCar(newMake, newModelYear, newColor) {
   var speed = 0;
   return {
     make: newMake,
     modelYear: newModelYear,
     color: newColor,
     getData: function() { return this.make + " released in " + this.modelYear + " in the color " + this.color;},
     getSpeed: function() { if (speed <= 85 && speed > 0) {return speed;} else { speed = 85; return "You're going too fast!!!!!!";}},
     brake: function() { speed = speed - Math.floor(Math.random()*(speed/2));},
     accelerate: function() {speed = speed + 10;},
    //  toSeventy: function() {while(speed != 70) {speed = 70}},
    //  toZero: function() {while(speed != 0) {speed = 0}}
   };
 };


 var car = createCar("Volswagon", 2018, "purple");


 function toSeventy(obj) {
   while (obj.getSpeed() < 70 ) {
    obj.accelerate();
    console.log(obj.getSpeed());
   };
  };

function toZero(timrin) {
  while(timrin.getSpeed() > 0) {
    timrin.brake();
    console.log(timrin.getSpeed());
  };
};
