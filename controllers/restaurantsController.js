const restaurantModel = require("../models/RestaurantModel");
exports.getRestaurantList = async (req, res) => {
  try {
    let result = await restaurantModel.find();
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

exports.getRestaurantListByLocationId = async (req, res) => {
  try {
    let loc_id = req.params.loc_id;
    let result = await restaurantModel.find({ location_id: loc_id });
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

exports.getRestaurantDetailsById = async (req, res) => {
  try{
    let rest_id = req.params.id;
  let result = await restaurantModel.findOne({ _id: rest_id });
  if (result) {
    let sendData = {
      status: true,
      result: result,
    };
    res.status(200).send(sendData);
  } else {
    let sendData = {
      status: false,
      message: "Restaurant not found"
    };
    res.status(200).send(sendData);
  }
  }catch{
    let sendData = {
      status: false,
      message: "Server Error, Contact to admin"
    };
    res.status(500).send(sendData);
  }
  
};

exports.filterData = async(req,res) => {
  let {mealtype_id, location, cuisine, hcost, lcost, sort, page} = req.body;
  console.log(req.body)
  sort = sort === undefined? 1: sort
  console.log("sort=", typeof(sort), sort)
  let filter = {}
  if(location !== undefined) filter["location_id"]=location;
  if(mealtype_id !== undefined) filter["mealtype_id"]=mealtype_id;
  if(cuisine !== undefined) filter["cuisine_id"]={$in:cuisine};
  if(hcost !== undefined && lcost !== undefined) filter["min_price"]={$gte: lcost, $lte: hcost};

  // if(lcost) filter["location_id"]=lcost;
  // if(sort) filter["location_id"]=sort;
  // if(page) filter["location_id"]=page;
  let result = await restaurantModel.find(filter,{name:1, city:1, locality:1, min_price:1, cuisine:1, image:1}).sort({min_price:sort})


  result = result.slice(Number(page)*2-2,Number(page)*2)
  console.log("type=",typeof(result), result)
  let sendData = {
    status: true,
    result
  }
  res.status(200).send(sendData);
}