import { MongoClient } from "mongodb";
import {dataGba} from "./dataImport";
import initDatabase from "../utils/initDatabase";

initDatabase()
  .then((client: MongoClient) => {
    const db = client.db();
    dataGba(db).then(() => {
      client.close();
    });
  })
  .catch((e) => console.warn(e));
