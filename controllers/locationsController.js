const LocationModal = require("../models/LocationModal");
exports.getLocationList = async (req, res) => {
  try {
    let result = await LocationModal.find();
    let sendData = {
      status: true,
      result,
    };
    res.status(200).send(sendData);
  } catch {
    let sendData = {
      status: false,
      error,
    };
    res.status(500).send(sendData);
  }
};
