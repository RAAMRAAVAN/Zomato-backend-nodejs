const MealTypesModel = require("../models/MealTypesModel")
exports.getMealtypes = async(req,res) => {
    try{    let result = await MealTypesModel.find()
        let sendData = {
            status: true,
            result
        }
        res.status(200).send(sendData)}catch{
            let sendData = {
                status: false,
                error
            }
            res.status(500).send(sendData)
        }
}