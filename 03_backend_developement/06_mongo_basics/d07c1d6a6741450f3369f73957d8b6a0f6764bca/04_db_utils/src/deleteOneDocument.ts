import * as mongo from "mongodb";

export function deleteOneDocument<T>(collection: mongo.Collection, filterObject: FilterQuery<T>): Promise<boolean> {
  return new Promise ((resolve, reject) => {
  if (collection.deleteOne(filterObject)) {
    resolve(true)
  } else {
    reject(false)
  }
})
}
