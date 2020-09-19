import { litersOfCoffee } from "./container.js";

export const volumeExpresso = 0.08;
export const volumeLongCoffee =0.15;


export function expresso (volumeExpresso) {
  if (litersOfCoffee >= volumeExpresso) {
    return true;
  }
  else {
    return false;
  }
};

export function longCoffee (volumeLongCoffee) {
  if (litersOfCoffee >= volumeLongCoffee) {
    return true;
  }
  else {
    return false;
  }
};


export default { expresso, longCoffee };
