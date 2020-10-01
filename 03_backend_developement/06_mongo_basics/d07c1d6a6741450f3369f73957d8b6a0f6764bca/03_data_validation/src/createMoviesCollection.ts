import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
       bsonType: "object",
       required: [ "_id", "title", "genre", "year" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be an object and is required"
          },
          title: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          genre: {
            enum: ["action", "comedy", "dramatic", "horror", "romance" ],
            description: "must be a string and is required"
          },
          year: {
             bsonType: "int",
             minimum: 1950,
             maximum: 2020,
             description: "must be a integer and is required"
          },
          ratings: {
            bsonType: "object",
            additionalProperties: false,
            required: ["pressRating", "spectatorsRating"],
            properties: {
              pressRating: {
                bsonType: "int",
                minimum: 1,
                maximum: 5,
              },
              spectatorsRating: {
                bsonType: "int",
                minimum: 1,
                maximum: 5,
              }
            },
            description: "must be an object w/ 2 required properties"
         },
            }
          }
        }
};

export function createMoviesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
