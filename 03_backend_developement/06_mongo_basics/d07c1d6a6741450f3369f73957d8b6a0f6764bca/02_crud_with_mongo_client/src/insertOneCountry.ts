import * as mongo from "mongodb";
import { Country } from "./countryTypes";


export function insertOneCountry(db: mongo.Db): Promise<Country> {

  const newCountry: Country = {
    name: "Portugal",
    capital: "Porto",
    continent: "Europe",
  }
  
  return db
  .collection("worldAtlas")
  .insertOne(newCountry)
  .then((result) => {
    return result.ops[0]
  })
  
}
