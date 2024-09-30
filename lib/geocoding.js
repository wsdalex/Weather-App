import axios from "axios";

class Geocoder {
  constructor(key) {
    this.key = key;
  }

  async getLocation(query) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${this.key}`;
    const response = await axios.get(url);
    const detailedData = response.data;

    const locationData = detailedData.reduce((data, location) => {
      const refinedData = {
        name: location.name,
        lat: location.lat,
        lon: location.lon,
        country: location.country,
      };
      data.push(refinedData);
      return data;
    }, []);
    return locationData;
  }
}

export default Geocoder;
