var express = require('express');
var fs = require('fs');
var router = express.Router();


router.post('/',function(req,res,next){
  var filepath = './routes/mymd.md';
  fs.readFile(filepath,function(data,error){
      if(!error){
        res.send(data);
      }
      else{
        res.send(error);
      }
  });
});

module.exports = router;
