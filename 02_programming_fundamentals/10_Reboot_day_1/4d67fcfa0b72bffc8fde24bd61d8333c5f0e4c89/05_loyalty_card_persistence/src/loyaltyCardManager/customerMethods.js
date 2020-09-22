import * as uuid from "uuid";
import * as custObject from "../datas/customers.js";


const customers = JSON.parse(custObject.custObject);



export const createCustomerObject = (customerData) => {
    const {firstName, lastName, email} = customerData;
     customers.push ({
         id: uuid.v4(),
         firstName: customerData.firstName,
         lastName: customerData.lastName ,
         email: customerData.email,
         fidelityPoints: {},
         purchaseHistory: [],
         /** add here what you need to manipulate the customer in the program
          * fullname // is a function like 
          * computetotal is a function to calculate the point.
          * reduce pour récup le total des achats puis appliquer un % pour donner les poitns fid.
          * usedFidelityPoints
          * getAvailablePoints
          * 
          */

     });
    
}


export const getAllCustomer = () => customers;


export const chosenCustomer = (customer) => {
  console.log(customer);

}