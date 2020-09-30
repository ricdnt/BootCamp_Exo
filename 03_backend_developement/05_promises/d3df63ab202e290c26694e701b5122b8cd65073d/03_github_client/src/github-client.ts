import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string | void> {
    
    return fetch(
      `https://api.github.com/users/${nickname}/repos`,
    { method: "GET" })
    .then((response: Response) => {return response.json()} )
    .then(json => {
      if (json.message === "not found") {
        throw new Error("the user doesn't exist");
      }
      return json.repos_url;

    });
  }
}

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  
  static printRepository() {
    // You code goes here
  }
  
  static getProjectInformations() {
    // You code goes here
  }
}
