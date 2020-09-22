import * as uuid from "uuid";


const customers = [];



export const createCustomerObject = (customerData) => {
    const {firstName, lastName, email} = customerData;
     customers.push ({
         id: uuid.v4(),
         firstName: customerData.firstName,
         lastName: customerData.lastName ,
         email: customerData.email,
         fidelityPoints: {},
         purchaseHistory: [],
         /**
          * fullname
          * computetotal
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