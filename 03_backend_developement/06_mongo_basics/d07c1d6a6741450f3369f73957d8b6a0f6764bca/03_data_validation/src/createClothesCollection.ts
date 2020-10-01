import * as mongo from "mongodb";

export const sweaterProperties = {
  
       bsonType: "object",
       required: [ "_id", "name", "color", "category", "size" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be an object and is required"
          },
          name: {
             bsonType: "string",
             maxLength: 30,
             description: "must be a string and is required"
          },
          color: {
            bsonType: "string",
            maxLength: 15,
            description: "must be a string and is required"
          },
          category: {
             enum: ["sweater"],
             description: "must be a integer and is required"
          },
          size: {
            enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
            },
            description: "must be an object"
            },
};

export const shoesProperties = {
  
       bsonType: "object",
       required: [ "_id", "name", "color", "category", "size" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be an object and is required"
          },
          name: {
             bsonType: "string",
             maxLength: 30,
             description: "must be a string and is required"
          },
          color: {
            bsonType: "string",
            maxLength: 15,
            description: "must be a string and is required"
          },
          category: {
             enum: ["shoes"],
             description: "must be a integer and is required"
          },
          size: {
            bsonType: "int",
                minimum: 30,
                maximum: 50,
              },
            material: {
              enum: ["leather", "textile", "synthetic"]
            } 
            },
            description: "must be an object"
 
};

export const pantsProperties = {
  
    
       bsonType: "object",
       required: [ "_id", "name", "color", "category", "size" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be an object and is required"
          },
          name: {
             bsonType: "string",
             maxLength: 30,
             description: "must be a string and is required"
          },
          color: {
            bsonType: "string",
            maxLength: 15,
            description: "must be a string and is required"
          },
          category: {
             enum: ["pants"],
             description: "must be a integer and is required"
          },
          size: {
            bsonType: "object",
            required: [ "width"],
            additionalProperties: false,
            properties: {
              width: {
                bsonType: "int",
                minimum: 32,
                maximum: 46,
              },
            cut: {
                enum: ["slim", "skinny", "regular", "straight"],
              }
            }
            }
            },
        description: "must be an object"
          }
;

export const clothesValidator = {
  validator: {
    $jsonSchema: {
       bsonType: "object",
       required: [ "_id", "name", "color", "category", "size" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be an object and is required"
          },
          name: {
             bsonType: "string",
             maxLength: 30,
             description: "must be a string and is required"
          },
          color: {
            bsonType: "string",
            maxLength: 15,
            description: "must be a string and is required"
          },
          category: {
             enum: ["sweater", "pants", "shoes"],
             description: "must be a integer and is required"
          },
          size: {
            bsonType: "string",
            required: [ "width"],
            additionalProperties: true,
            properties: {
              width: {
                bsonType: "int",
                minimum: 32,
                maximum: 46,
              },
            },
            cut: {
                enum: ["slim", "skinny", "regular", "straight"],
              }
            }
            },
            description: "must be an object"
            },
            }
          }

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
