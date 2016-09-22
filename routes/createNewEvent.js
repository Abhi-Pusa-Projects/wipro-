var express = require('express');
var router = express.Router();
var Event = require('./events');

router.post('/',function(req,res,next){
  console.log("we are reaching till this api");
  console.log(req.body);
  //res.send('create Evnet api has been called');
  var eventObj={};
  eventObj.eventName = req.body.eventName;
  eventObj.eventorg = req.body.eventorg;
  eventObj.startDate = req.body.startDate;
  eventObj.endDate = req.body.endDate;
  eventObj.teamLimit = req.body.teamLimit;
  eventObj.themeType = req.body.themeType;
  eventObj.eventDesc = req.body.eventDesc;
  eventObj.eventUrl = req.body.eventUrl;
  eventObj.finished = true;
  console.log(eventObj);
  var event = new Event(eventObj);

  Event.find({eventName:eventObj.eventName},function(err,data){
    if(data.length){
      console.log("event already exist");
      res.send("Event aleady exist");
    }else{
      //add new evebt in the database
      event.save(function(err,data){
        if(!err){
          console.log("data saved successfully");
          res.send("data saved successfully");
        }else{
          console.log("data not saved",err);
          res.send("something went worng");
        }
      });
    }
  });
});

module.exports = router;
