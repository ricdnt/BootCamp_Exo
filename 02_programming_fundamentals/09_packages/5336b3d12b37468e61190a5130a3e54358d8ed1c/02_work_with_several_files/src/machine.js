import container from "./container.js";
import drinks  from "./drinks.js";

const expresso = drinks.expresso; 

const fillWithLitersOfCoffee = container.putLitersOfCoffee;

const longCoffee = drinks.longCoffee; 

const coffeeMachine = container.consumeLitersOfCoffee;

coffeeMachine();

export { fillWithLitersOfCoffee, expresso, longCoffee };


