var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports =  mongoose.model('teams',new Schema({
    teamName:{type:String,unique:true},
    teamAdmin : {type:String},
    teamMembers: Array,
    eventId:{type:String},
    teamDesc : {type:String},
    teamTheme : {type:String},
    createdAt : {type:Date}
}));

// Add createdAt timestamp
