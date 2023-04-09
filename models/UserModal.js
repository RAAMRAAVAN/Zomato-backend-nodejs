const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema=new Schema({
    full_name:{type:String},
    email:{type:String},
    mobile:{type:Number},
    password:{type:String},
});
const UserModal= mongoose.model('user', Userschema, 'users');
module.exports = UserModal;