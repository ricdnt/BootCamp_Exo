


export let litersOfCoffee = 0;

export const putLitersOfCoffee = (liters) => {
  litersOfCoffee += liters ;
  return litersOfCoffee;
};



export function consumeLitersOfCoffee (volumeCoffee) {
  if (litersOfCoffee - volumeCoffee >= 15) {
    litersOfCoffee -= volumeCoffee ;
    return true;
  } 
  else {
    return false;
  };
}


export default {putLitersOfCoffee, consumeLitersOfCoffee };
