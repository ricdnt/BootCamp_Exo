/* global db */

const country = {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  }
// write your MongoDB shell command here
db.worldAtlas.insertOne(country);
