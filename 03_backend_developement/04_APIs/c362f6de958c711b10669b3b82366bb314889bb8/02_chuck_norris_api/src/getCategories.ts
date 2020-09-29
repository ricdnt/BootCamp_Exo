import * as request from "request";


function getCategories(): void {
  request.get( 
    "https://api.chucknorris.io/jokes/categories", 
     (error, res) =>  {
      if (error) {
        console.error(error)
      } else {
        const categories =JSON.parse(res.body);

        for (let i = 0; i < categories.length; i++) {
        console.log(categories[i]);
      }
    }
})
}





// leave line below for tests to work properly 
export { getCategories }
