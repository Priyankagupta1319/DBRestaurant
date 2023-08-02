const mongoose = require("mongoose");

const restaurantsSchema = mongoose.Schema({
    name: String,
    cuisines: Array,
    avgRating: String,
    deliveryTime: String,
    costForTwo: String,
    cloudinaryImageId: String,
  
});

const restaurantsModel = mongoose.model("restaurants", restaurantsSchema);

module.exports = restaurantsModel;



