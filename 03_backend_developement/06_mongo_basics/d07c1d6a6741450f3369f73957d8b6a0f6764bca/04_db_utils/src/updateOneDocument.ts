import * as mongo from "mongodb";

export function updateOneDocument<T>(collection: mongo.Collection, objectFilter: FilterQuery<T>, updatedObject: UpdateQuery<T>):Promise<T[]> {
  return new Promise ((resolve, reject) => {
    if (collection.updateOne(objectFilter, updatedObject)) {
     resolve(updatedObject);
  }
  else {
      reject(updatedObject);
    }
})
}

