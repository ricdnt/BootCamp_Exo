import { rl } from "./reader";

function ask(question: string): Promise<string> {
  return new Promise((resolve, reject) => {
    rl.question(question, (input: string) => {
      if (input !== "") {
        resolve(input);
      } else {
        reject("Error = invalid input");
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
