import * as mongo from "mongodb";
import { Country } from "./countryTypes";

export function findOneCountry(db: mongo.Db): Promise<Country> {
  return db.collection("worldAtlas").findOne({name: "Iceland"})

}
