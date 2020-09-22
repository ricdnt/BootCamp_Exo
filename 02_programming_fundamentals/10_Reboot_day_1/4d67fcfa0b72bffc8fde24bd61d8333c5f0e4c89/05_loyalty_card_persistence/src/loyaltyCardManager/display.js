import * as customer from "./customerMethod.js";
import { loyaltyManager } from "./index.js";

let r;

const list = ["1 - Add new customer", "2 - Access customer data", "3 - Quit"];

const ask = (q, c) => r.question(`${q}\n`, c);


export const displayMenu = () => {

    return list.forEach((menuOption) => {
        console.log(menuOption);
    });

};

export const createCustomer = (reader) => {
 
    r = reader;
    console.log("********************************************************");
    console.log("CREATE NEW CUSTOMER");
    console.log("********************************************************");
    
    ask("🐥 - Firstname: ", firstName => {

        ask("🐥 - Lastname:", lastName => {
             const customerData = {
                 firstName,
                 lastName
//...
             }
            customer.createCustomerObject(customerData);
            const customers = customer.getAllCustomer();
            //console.log(customers); pour verif que çà marche
            loyaltyManager(r);
        })  
    });
}
let count = 1;

export const displayCustomer = (reader) => {
    //console.log(customer.customers);
    
    r = reader
    console.log("********************************************************");
    console.log("CHOOSE A CUSTOMER");
    console.log("********************************************************")
    const tab = customer.getAllCustomer();
 let count = 1;
    tab.forEach( element => {
        console.log(`${count} - ${element.firstName} ${element.lastName} \n`);
        count ++;
    });

    console.log("********************************************************");
    ask("choose a customer \n", (input) => {

        console.log(tab[input - 1]);

        loyaltyManager(r);

        ask("1 - Modify Customer data", "2 - Return to the Menu", (input)=> {
            switch(input){
                case "1":
                modifyCustomer(r);
                break;
                case"2":
                loyaltyManager(r);
                break;
                default:
                    console.log("please, choose among the option 1 or 2 !");
                    loyaltyManager(r);
            };
            loyaltyManager(r);
        });


        //loyaltyManager(r);

    });

    //loyaltyManager(r);

};


export const modifyCustomer = (reader) => {

    r = reader;

    console.log("Choose lastname: \n ", (input) => {
        
    });

}

// correction exos
const choseCustomer = () => {
    const customers = customer.getAllCustomer();
    const fullNames = customers.map( (cutomer) => customer.fullName);

    console.log(fullNames);
    ask( "choose a customer", (index) => {
    const customer = customers[index - 1];
    displayCust();

    })
}


export const displayCust = () => {
  // here n x cnsole.log by keys.

}
