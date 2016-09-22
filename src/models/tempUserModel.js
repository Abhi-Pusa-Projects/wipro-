var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tempUserSchema = new Schema({
  email: {type:String,unique:true,required:true},
  token: {type:String},
  createdAt: {type:Date, expires:86400, default:Date.now}
})

var tempUser = mongoose.model('TempUsers',tempUserSchema)

module.exports = tempUser;
