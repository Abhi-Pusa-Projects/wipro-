var express = require('express');
var router = express.Router();

var Event = require('./events');

router.post('/',function(req,res,next){
  console.log("we are getting called from getEventsList function");
  Event.find({},function(err,events){
    if(err){
      console.log("having issue in getting data");
      res.send("Error in retrieving the data");
    }
    else{
      console.log(events);
      res.send(events);
    }
  })
});


module.exports = router;
