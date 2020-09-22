//import readline from "readline";
import * as display from "./display.js";
//import * as customer from "./customer.js";

/*
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
*/

let r;

const ask = (q, c) => r.question(`${q}\n`, c);


export const loyaltyManager = (reader) =>  {

    r =reader;

    console.log("Welcome \n ******************************************************** \n");

    display.displayMenu();

    ask("choose a option", action => {

        switch(action) {
            case "1":
            display.createCustomer(r);
            break;
            case"2":
            display.displayCustomer(r);
            break;
            case"3":
            r.close();
            break;
            default:
                console.log("please, choose among the option 1, 2 or 3 !");
                loyaltyManager(r);
        }
        
        
    });

    
};

//loyaltyManager(reader);

/*
const customerAction = () => {
    // choice to manage the cust datas;
}
//loyaltyManager(reader);
*/
