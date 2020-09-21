import container from "./container.js";


export function expresso () {
  return container.consumeLitersOfCoffee(0.08);
};


export function longCoffee () {
  return container.consumeLitersOfCoffee(0.15);
};

export default { expresso, longCoffee };
