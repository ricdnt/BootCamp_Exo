import * as mongo from "mongodb";

export type Validator = {
  [key: string]: unknown;
};


export interface Collection extends Validator {
   name: string;
}

export function createCollectionWithValidator(db: mongo.Db , collectionName: string , Collection: Validator): Promise<mongo.Collection<T>> {

  return db.createCollection(collectionName, Collection);

}



