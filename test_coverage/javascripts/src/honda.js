var Honda = function(model) {
  this.verify(model);
  this.model = model;
  this.make = "Honda";
  this.price = Honda.getPrice(model);
}

Honda.constructor = Honda;

(function() {
  var models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"],
      prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];

  Honda.prototype = Object.create(Vehicle.prototype);
  

  Honda.prototype.verify = function(new_model) {
    if (models.every(function(model) {
         return model !== new_model;
       }, this)) {
      throw new Error("Model " + new_model + " does not exist");
      return undefined;
    }
  }

  Honda.getPrice = function(model) {
   var idx = models.indexOf(model);
   return prices[idx];
  }

  Honda.getModels = function() {
    return models;
  }
})();