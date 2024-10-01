import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
class UserInterface {
  intro() {
    console.log("Hello and welcome to Weather App 3000!");
  }
  askForLocation() {
    const location = prompt("Please enter a location: ");
    return location;
  }

  askForSpecificLocation(locations) {
    let num = 1;
    locations.forEach((location) => {
      console.log(
        `${num}. Name: ${location.name}, Country: ${location.country}`
      );
      num++;
    });
    const choice = prompt("\nPlease enter the number of a location: ");
    return locations[choice - 1];
  }

  displayWeather(weatherData) {
    console.log(
      `\nThe weather in ${weatherData.name} is currently: ${weatherData.weather}, ${weatherData.description}. \nThe temperature is currently ${weatherData.temperature}C.`
    );
  }

  requestMoreWeather() {
    const confirmMoreWeather = prompt(
      "Would you like to search another location? Y/N "
    );
    if (confirmMoreWeather.toLocaleLowerCase() == "y") {
      return true;
    }

    return false;
  }
}

export default UserInterface;
