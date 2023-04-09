const UserModal = require("../models/UserModal");
exports.login = async (req, res) => {
  try {
    let data = req.body;
    let result = await UserModal.findOne({
      email: data.email,
      password: data.password,
    });
    if (result == null) {
      let sendData = {
        status: false,
        message: " Invalid Cradential",
      };
      res.status(200).send(sendData);
    } else {
      let sendData = {
        status: true,
        message:'login successful',
        result,
      };
      res.status(200).send(sendData);
    }
  } catch {
    let sendData = {
      status: false,
      error,
    };
    res.status(500).send(sendData);
  }
};
exports.signUp = async (req, res) => {
  let data = req.body;
  try {
    let checkAlreadyRegistered = await UserModal.findOne({email: data.email})
    if(checkAlreadyRegistered==null){
    // create instance
    let newUser = new UserModal({
      full_name: data.full_name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    });
    // save method
    let result = await newUser.save();
    let sendData = {
      status: true,
      result,
    };
    res.status(200).send(sendData);}
    else{
        let sendData = {
            status: false,
            message: "user already registered, Please Login with",
            email: checkAlreadyRegistered.email,
            password: checkAlreadyRegistered.password
          };
          res.status(500).send(sendData);
    }
  } catch {
    let sendData = {
      status: false,
      error,
    };
    res.status(500).send(sendData);
  }
};
