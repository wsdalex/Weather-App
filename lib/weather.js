import axios from "axios";

class Weather {
  constructor(key) {
    this.key = key;
  }

  async getWeather(locationInfo) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationInfo.lat}&lon=${locationInfo.lon}&appid=${this.key}&units=metric`;
    const response = await axios.get(url);
    const unrefinedData = response.data;
    const weather = {
      weather: unrefinedData.weather[0].main,
      description: unrefinedData.weather[0].description,
      temperature: Math.floor(unrefinedData.main.temp),
      name: unrefinedData.name,
    };
    return weather;
  }
}

export default Weather;
