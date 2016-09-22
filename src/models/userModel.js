var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {type:String,unique:true,required:true},
  token: {type:String},
  createdAt: {type:Date, expires:86400, default:Date.now},
  name: {type:String},
  location: {type:String},
  password: {type:String}
})

var user = mongoose.model('Users',userSchema)

module.exports = user;
