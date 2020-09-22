import readline from "readline";
import {loyaltyManager} from "./loyaltyCardManager/index.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


loyaltyManager(reader);