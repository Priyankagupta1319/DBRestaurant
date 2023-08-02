const restaurantController = require("../controller/restaurant.controller");

module.exports = (app) => {
  app.post("/api/restaurants", restaurantController.create);
};
