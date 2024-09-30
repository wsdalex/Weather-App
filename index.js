import "dotenv/config"; // Automatically loads .env configuration
import Geocoder from "./lib/geocoding.js";
import Weather from "./lib/weather.js";
import UserInterface from "./lib/userInterface.js";

const API_KEY = process.env.API_KEY;

const geocoder = new Geocoder(API_KEY);
const weather = new Weather(API_KEY);
const userInterface = new UserInterface();
async function main() {
  const locations = await geocoder.getLocation("London");
  const location = userInterface.askForSpecificLocation(locations);
  const weatherInfo = await weather.getWeather(location);
  console.log(weatherInfo);
}

main();
