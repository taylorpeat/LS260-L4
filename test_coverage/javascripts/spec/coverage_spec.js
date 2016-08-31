describe('Vehicle tests', function() {
  var vehicle;

  beforeEach(function() {
    vehicle = new Vehicle({
      make: "Honda",
      model: "Civic"
    });
  });

  it("sets the make and model properties when an object is passed in", function() {
    expect(vehicle.make).toEqual("Honda");
    expect(vehicle.model).toEqual("Civic");
  });

  it("returns a concatenated string with make and model", function() {
    expect(vehicle.toString()).toEqual("Honda Civic");
  });

  it("returns a message when the horn is honked", function() {
    expect(vehicle.honkHorn()).toMatch("Beep beep!");
  });

});


describe('Honda tests', function() {
  var honda;

  beforeEach(function() {
    honda = new Honda("Accord");
  });

  it("inherits the Vehicle prototype", function() {
    expect(honda.make).toString("Honda Accord");
  });

  it("sets the model property when a valid model is passed in", function() {
    expect(honda.make).toEqual("Honda");
    expect(honda.model).toEqual("Accord");
  });

  it("throws an error if an invalid model is passed in", function() {
    var invalidModel = function() {
      new Honda("Corolla");
    }

    expect(invalidModel).toThrowError("Model Corolla does not exist");
  });

  it("returns a list of valid models", function() {
    var models = Honda.getModels();
    expect(models.length).toBeDefined();
    expect(models).toContain("CR-V");
  });

  it("calls getPrice when a new car is created", function() {
    spyOn(Honda, "getPrice");
    another_car = new Honda("Civic");

    expect(Honda.getPrice).toHaveBeenCalledWith("Civic");
  });

  it("returns a price for the passed in model", function() {
    expect(honda.price).toBeGreaterThan(0);
  });

  it("returns a price less than 15000 when a Civic is created", function() {
    var civic = new Honda("Civic");

    expect(civic.price).toBeLessThan(15000);
  });

  it("returns a price greater than 10000 when a CR-V is created", function() {
    var cr_v = new Honda("CR-V");

    expect(cr_v.price).toBeGreaterThan(10000);
  });

});