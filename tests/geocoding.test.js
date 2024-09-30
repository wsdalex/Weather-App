const Geocoder = require("../lib/geocoding");

describe("geocoding class", async () => {
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

  test("Method get locations returns 5 locations", async () => {});
});
