import * as request from "request"

class AuthorRepository {
  baseUrl = process.env.BASE_URL;
  
  options = {
    url: this.baseUrl,
    method: 'GET', 
    };

  
  getAll():void {
    request(
      `${this.options.url}/authors`,
    
    (error, response, result) => {
          
      if (error)
          console.error(error)
      }
      else {
        const authorDatas = JSON.parse(response.body);
        console.log(authorDatas);
      }

      callback(JSON.parse(result)) {

      })
    });
  
  }

  getOne():void {
    request(`${this.options.url}/authors/:id`,
    
    (error, response) => {
      if (error) {
        console.error(error)
      }
      else {
        const authorDatas = JSON.parse(response.body);
        console.log(authorDatas);
      }
    });
  }

  getAtuhorsBook(): void {
    request(`${this.options.url}/authors/:id/books`,
    
    (error, response) => {
      if (error) {
        console.error(error)
      }
      else {
        const authorDatas = JSON.parse(response.body);
        console.log(authorDatas);
      }
    });

  }

  searchByName(): void {
   request(`${this.options.url}/authors?q=<name>`,
    
    (error, response) => {
      if (error) {
        console.error(error)
      }
      else {
        const authorDatas = JSON.parse(response.body);
        console.log(authorDatas);
      }
    });

  }  
}


// Leave the line below for tests to work
export {
  AuthorRepository
}
