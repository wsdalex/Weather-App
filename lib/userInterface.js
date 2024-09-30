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
}

export default UserInterface;
