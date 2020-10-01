import * as mongo from "mongodb";


export function initDatabase(databaseUrl: string, options: Record<string,unknown>): Promise<mongo.MongoClient> {
  return new Promise((resolve, reject) => {
    mongo.connect(databaseUrl, options, (error, client) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}