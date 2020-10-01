import * as mongo from "mongodb";
import { Country } from "./countryTypes";

export function findManyCountries(db: mongo.Db): Promise<Country[]> {
  return db
  .collection("worldAtlas")
  .find({continent: "Europe"})
  .toArray()
  }

