import * as mongo from "mongodb";

export function renameCollection(db: mongo.Db, collectionName: string, NewName: string): Promise<mongo.Collection> {
  
  return db.renameCollection(collectionName, NewName)
}
