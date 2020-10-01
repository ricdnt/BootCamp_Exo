import * as mongo from "mongodb";

const insertThreeCountries = [
  {
    name: "Afrique du Sud",
    capital: "Cape Town",
    continent: "Afrique",
  },
  {
    name: "Chine",
    capital: "Pékin",
    continent: "Asie",
  },
  {
    name: "Niger",
    capital: "Lagos",
    continent: "Afrique",
  }
]

export function insertManyCountries(db: mongo.Db) {
  return db
  .collection("worldAtlas")
  .insertMany(insertThreeCountries)
  .then( (result) => {
    return result.ops
  })
}
