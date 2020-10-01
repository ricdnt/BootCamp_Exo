import * as mongo from "mongodb";

export function findManyDocuments<T>(collection: mongo.Collection, filterObject: FilterQuery<T>): Promise<T[]> {
  return collection.find(filterObject).toArray();
}
