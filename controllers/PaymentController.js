const Razorpay = require("razorpay");

exports.getOrderId = (req, res) => {
  let {amount} = req.body
  var instance = new Razorpay({
    key_id: "rzp_test_xgYaVwXZeBYCul",
    key_secret: "6ZkAYdq3pmSjvD14D3KhP2Se",
  });

  var options = {
    amount: amount, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      res.status(500).send({ status: false });
    } else {
      res.status(200).send({ status: true, order });
    }
  });
};

exports.verifyPayment = (req, res) => {
  let { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  let body = razorpay_order_id + "|" + razorpay_payment_id;

  let crypto = require("crypto");
  let expectedSignature = crypto
    .createHmac("sha256", "6ZkAYdq3pmSjvD14D3KhP2Se")
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);
  let message = { status: false };
  if (expectedSignature === razorpay_signature) message = { status: true };
  res.send(message);
};
