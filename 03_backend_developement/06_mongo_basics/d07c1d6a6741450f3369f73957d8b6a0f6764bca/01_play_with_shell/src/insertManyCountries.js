/* global db */

const newCountries = [{
    name: "Mexique",
    capital: "Mexico",
    continent: "Amérique centrale",
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Allemagne",
    capital: "Berlin",
    continent: "Europe",
  }
]
// write your MongoDB shell command here
db.worldAtlas.insertMany(newCountries);