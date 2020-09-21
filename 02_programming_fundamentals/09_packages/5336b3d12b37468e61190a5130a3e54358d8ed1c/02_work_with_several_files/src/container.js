
let litersOfCoffee =  0;

export function putLitersOfCoffee (liters) {
  litersOfCoffee += liters;
  return litersOfCoffee;
};

export function consumeLitersOfCoffee (quantityInCentiliters) {
  if (litersOfCoffee - quantityInCentiliters >= 0) {
    litersOfCoffee -= quantityInCentiliters;
    return true;
  } else {
    return false;
  }
};

export default {putLitersOfCoffee, consumeLitersOfCoffee };
