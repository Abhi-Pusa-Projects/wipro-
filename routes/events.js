var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports= mongoose.model('events',new Schema({
  eventName:{type:String,unique:true},
  eventorg:String,
  startDate:String,
  endDate:String,
  teamLimit:Number,
  themeType:String,
  eventDesc:String,
  eventUrl:String,
  finished:Boolean
}));


// 1. eventId data type?
// 2. Add createdAt timestamp
