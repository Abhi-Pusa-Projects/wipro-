var express = require('express');
var router = express.Router();
var User = require('./users.js');
var crypto = require('crypto');

router.post('/',function(req,res,next){
  console.log(req.body);
var salt = crypto.randomBytes(128).toString('base64');
var beforeTime = (new Date()).getTime();
crypto.pbkdf2(req.body.password, salt , 100000, 512, 'sha512', function(err, key){
  if (err) throw err;
  var afterTime = (new Date()).getTime();
  console.log('Time taken::::', afterTime - beforeTime);
  console.log("key",key.toString('hex'));  // 'c5e478d...1469e50'
  console.log("salt",salt);
  //update the profile with updated password

  var obj ={
    "email":req.body.email,
    "password":key.toString('hex'),
    "fullName":req.body.fullName,
    "location":req.body.location,
    "salt":salt
  };


  User.update({"email":req.body.email},{$set:{"fullName":req.body.fullName,"location":req.body.location,"password":key.toString('hex'),"salt":salt}},function(err){
    if(!err){
      console.log("successfully updated");
      res.end("successfully updated");
    }else{
      console.log("not updated successfully");
      res.end("not updated successfully");
    }
  });
});

});


module.exports = router;
