const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationsController');
const mealtypes = require('../controllers/mealtypesController')
const restaurantController = require('../controllers/restaurantsController')
const menuItemController = require('../controllers/menuItemController')
const userController = require('../controllers/userController')
const payment = require('../controllers/PaymentController')
// restaurant
router.get("/api/get-restautant-details", restaurantController.getRestaurantList)
router.get("/api/get-restaurant-by-location-id/:loc_id", restaurantController.getRestaurantListByLocationId)
router.get("/api/get-restaurant-details-by-id/:id", restaurantController.getRestaurantDetailsById)
router.post("/api/filter", restaurantController.filterData)
router.get("/api",(req,res) => {
    res.status(200).json({message:"home"})
})
// locations
router.get("/api/get-location",locationController.getLocationList)
// meal types
router.get("/api/get-meal-types", mealtypes.getMealtypes);
// menu items
router.get("/api/get-menu-item-list-by-restaurent-id/:id",menuItemController.getMenuItemListByRestaurantId)
// login & signup
router.post("/api/login", userController.login)
router.post("/api/sign-up", userController.signUp)
// Payment
router.post("/api/payment/gen-order",payment.getOrderId)
router.post("/api/payment/verify", payment.verifyPayment);
module.exports = router;