const star = { spectralClass: "O" };

const planet = {
  mass: 0.2,
  radius: 2,
  rotationStability: true,
  habitalZone: true,
};

function canHabitateLife(stars, planets) {
  
  if ((stars.spectralClass === "K" || stars.spectralClass  === "M")
   && planets.rotationStability
   && planets.habitalZone
   && (planets.mass > 0.32)
   || ((planets.mass < 0.32) && (0.5 < planets.radius < 2.5)) )
   
  {
    return true;
  }

  /* else if ((stars.spectralClass === "K" || stars.spectralClass  === "M")
  && planets.rotationStability
  && planets.habitalZone
  && (planets.mass > 0.32)
  &&planets.radius <= 0.5)
  {
    return false;
  }*/

  else if ((stars.spectralClass === "K" || stars.spectralClass  === "M")
  && planets.rotationStability
  && planets.habitalZone
  && (planets.mass > 0.32)
  || (planets.mass < 0.5 && planets.radius > 1)
  ){
    return true;
  }

  else if ((stars.spectralClass === "K" || stars.spectralClass  === "M")
  && planets.rotationStability
  && planets.habitalZone
  && (planets.mass > 0.32)
  || (planets.mass <= 0.5 && planets.radius < 1)
  ){
    return false;
  }

  /*else if ((stars.spectralClass === "K" || stars.spectralClass === "M")
   && planets.rotationStability
   && planets.habitalZone
   && (planets.mass > 0.32)
   && (planets.radius <= 0.5 || planets.radius >= 2.5))
  {
    return false;
  }*/

  if ((stars.spectralClass === "K" || stars.spectralClass === "M")
   && planets.rotationStability
   && planets.habitalZone
   && (planets.radius <= 0.5) /*|| planets.radius >= 2.5)*/) {
    return false;
  }

  else if ((stars.spectralClass === "K" || stars.spectralClass === "M")
   && planets.rotationStability
   && planets.habitalZone
    && (planets.mass >= 3)) {
    return false;
  }

  /* else if (((stars.spectralClass === "K" || stars.spectralClass === "M")
  && planets.rotationStability
  && planets.habitalZone)
  && (planets.mass < 0.5 && planets.radius > 1)) {
    return false;
  }*/

  else if ( stars.spectralClass === "O" || stars.spectralClass === "A") {
    return false; 
  } 
  
}


console.log(canHabitateLife(star, planet));

//console.log(test);

// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
