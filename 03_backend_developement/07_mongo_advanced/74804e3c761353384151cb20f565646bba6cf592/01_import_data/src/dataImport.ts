import * as fs from "fs";
import { Db } from "mongodb";
import * as path from "path";

export const dataGba = (db: Db ) => {

const fileName = "gba.json";
const filePath = path.resolve(`data/${fileName}`);
const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
const platform = JSON.parse(stringifiedPlatform);

return platform;
/*
return new Promise ((resolve, reject) => {
    if (db.collection("gba")) {
        resolve()
    }
}) */
}

export const datan64 = (db: Db ) => {

    const fileName = "n64.json";
    const filePath = path.resolve(`data/${fileName}`);
    const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
    const platform = JSON.parse(stringifiedPlatform);
    
    return new Promise ((resolve, reject) => {
        db.collection("n64")
    }) 
    }

    export const datanes = (db: Db ) => {

        const fileName = "nes.json";
        const filePath = path.resolve(`data/${fileName}`);
        const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
        const platform = JSON.parse(stringifiedPlatform);
        
        return new Promise ((resolve, reject) => {
            db.collection("nes")
        }) 
        }
    