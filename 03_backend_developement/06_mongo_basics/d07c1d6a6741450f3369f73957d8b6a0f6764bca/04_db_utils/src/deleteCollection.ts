import * as mongo from "mongodb";

export function deleteCollection(db: mongo.Db, CollectionName: string): Promise<boolean>  {
  return db.dropCollection(CollectionName);
}
