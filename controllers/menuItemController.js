const MenuItemModal = require("../models/MenuItemModal");
exports.getMenuItemListByRestaurantId = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await MenuItemModal.find({ restaurantId:id });
    let sendData = {
      status: true,
      result,
    };
    res.status(200).send(sendData);
  } catch {
    let sendData = {
      status: false,
      message: "error",
    };
    res.status(200).send(sendData);
  }
};
