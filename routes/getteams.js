var express = require('express');
var router = express.Router();
var teams = require('./teamModule');

router.post('/',function(req,res,next){
   var searchText = req.body.searchText;
   console.log("we are here",searchText);
    teams.find({$or:[{teamName:searchText},{teamTheme:searchText}]},function(err,data){
      if(!err){
        console.log(data);
        res.send(data);
      }
      else if(data.length == 0){
        console.log("no data found");
        res.send("no data found");
      }
      else{
        console.log("error",error);
        res.send("error");
      }
    })
});


module.exports = router;
