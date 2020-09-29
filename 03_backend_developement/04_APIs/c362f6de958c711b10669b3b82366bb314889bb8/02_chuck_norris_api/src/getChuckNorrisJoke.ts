import * as request from "request"

function getChuckNorrisJoke(category: string) {
  request.get(`https://api.chucknorris.io/jokes/random?${category}= {${category}}`,
  (error, res) => {
    if (error) {
      console.error(error)
    } else {
      const joke = JSON.parse(res.body)
      console.log(joke.value)
  }
  
})
}

// leave line below for tests to work properly
export { getChuckNorrisJoke }
