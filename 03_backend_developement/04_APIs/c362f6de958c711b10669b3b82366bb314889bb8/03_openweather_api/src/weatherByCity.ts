import * as request from "request";

function weatherByCity(city: string) {
  request.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
   
  (error, response) => {

    if (error) {
      console.error(error)
    }
    else {
      const weatherDatas = JSON.parse(response.body);
      console.log(`> ${weatherDatas.main.temp}°C`);
    }
  })
}

weatherByCity("Bogota");

// leave lines below for tests to work properly
module.exports = { weatherByCity }


