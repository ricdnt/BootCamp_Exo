import * as mongo from "mongodb";

export const booksValidator = {
    validator: {
    $jsonSchema: {
       bsonType: "object",
       required: [ "_id", "title", "author", "description" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be a string and is required"
          },
          title: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          author: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          description: {
             bsonType: "string",
             maxLength: 100,
             description: "must be a string w/ 100 char max. and is required"
          },
            }
          }
        }
        };


export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
