import { initDatabase } from "./initDatabase";
import { createCollectionWithValidator, Collection } from "./createCollectionWithValidator"
import * as mongo from "mongodb";



const dataBaseUrl = "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

initDatabase(dataBaseUrl, options).then((client) => {
   const db = client.db();
  
   
   client.close();
})




/*
import { dumbUtilFunction } from "./dumbUtilFunction";

dumbUtilFunction(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
*/