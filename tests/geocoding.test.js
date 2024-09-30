import Geocoder from "../lib/geocoding";
import axios from "axios";

jest.mock("axios");

describe("geocoding class", () => {
  let geocoder;

  beforeEach(() => {
    geocoder = new Geocoder();
  });

  test("class is created succesfully", () => {
    expect(geocoder).toBeInstanceOf(Geocoder);
  });

  test("Class has method get locations", () => {
    expect(typeof geocoder.getLocation).toBe("function");
  });

  test("Method get locations returns 5 locations", async () => {
    const mockData = [
      { name: "London", country: "GB", lat: 51.5074, lon: -0.1278 },
      { name: "London", country: "CA", lat: 42.9834, lon: -81.233 },
      { name: "London", country: "US", lat: 39.0639, lon: -84.4587 },
      { name: "London", country: "ZA", lat: -31.3489, lon: 28.5235 },
      { name: "London", country: "AU", lat: -33.8615, lon: 151.2055 },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const locations = await geocoder.getLocation("London");
    expect(locations.length).toBe(5);
    expect(locations).toEqual(mockData);
  });
});
