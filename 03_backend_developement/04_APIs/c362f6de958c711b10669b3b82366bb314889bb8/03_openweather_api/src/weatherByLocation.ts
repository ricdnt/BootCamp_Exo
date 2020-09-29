import * as request from "request"
import * as moment from "moment";


function weatherByZipcode(zipcode: string, countryCode: string): void {
  request.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}&lang=fr`,
  
  (error, response) => {
    if (error) {
      console.error(error)
    }
    else {
      const weatherDatas = JSON.parse(response.body);
      moment.locale("fr");
      weatherDatas.date = moment().format("L");
      weatherDatas.hour = moment().format('LTS');
    
    console.log(`Weather for ${weatherDatas.name}`);
    console.log(`date: ${weatherDatas.date}\n hour: ${weatherDatas.hour} \n temperature: ${weatherDatas.main.temp}\n weather: ${weatherDatas.weather[0].main}`);

  }
})
}

console.log(weatherByZipcode("59000", "fr"));


function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  request.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&lang=fr`,
  
  (error, response) => {
    if (error) {
      console.error(error)
    }
    else {
      const weatherDatas = JSON.parse(response.body);
      moment.locale("fr");
      weatherDatas.date = moment().format("L");
      weatherDatas.hour = moment().format('LTS');
    
    console.log(`Weather for ${weatherDatas.name}`);
    console.log(`date: ${weatherDatas.date}\n hour: ${weatherDatas.hour} \n temperature: ${weatherDatas.main.temp}\n weather: ${weatherDatas.weather[0].main}`);

  }
})
}

console.log(weatherByLatitudeAndLongitude(32.661343, 51.680374));

// leave lines below for tests to work properly
module.exports = {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}
