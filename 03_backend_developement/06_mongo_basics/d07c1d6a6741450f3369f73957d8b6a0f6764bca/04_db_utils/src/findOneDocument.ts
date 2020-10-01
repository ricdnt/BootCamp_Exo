import * as mongo from "mongodb";



export function findOneDocument<T>(collection: mongo.Collection, filterObject: FilterQuery<T>): Promise<T> {
  return collection.findOne(filterObject);
}
