import container from "./container.js";
import drinks  from "./drinks.js";



const fillWithLitersOfCoffee = container.putLitersOfCoffee;


function expresso () {
  
  return drinks.expresso();
}
        

function longCoffee () {
  
  return drinks.longCoffee();
}
      

function coffeeMachine () {
  return container.consumeLitersOfCoffee();
}




export { fillWithLitersOfCoffee, expresso, longCoffee };




