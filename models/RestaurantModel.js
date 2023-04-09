// get schema instance
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create schema
const restaurantSchema = new Schema({
  name: { type: String },
  location_id: { type: Number },
  city_id: { type: Number },
  locality: { type: String },
  thumb: { type: Array },
  aggregate_rating: { type: Number },
  rating_text: { type: String },
  min_price: { type: Number },
  contact_number: { type: String },
  cuisine_id: { type: Array },
  cuisine: { type: Array },
  image: { type: String },
  mealtype_id: { type: Number },
});
// create model
const RestaurantModel = mongoose.model(
  "restaurant",
  restaurantSchema,
  "restaurants"
);
// export model
module.exports = RestaurantModel