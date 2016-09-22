var express = require('express');
var apiRoutes = express.Router();
var mongoose = require('mongoose');
var User = require('./users');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
var crypto = require('crypto');//for encrytping the data


apiRoutes.post('/',function(req,res,next){
  console.log(req.body);
  User.findOne({email:req.body.email},function(err,user){
    if(err) throw err;
    if(!user) {
      res.json({"success":false,"message":"User Not Found"});
    }
    else if(user){
      var salt = user.salt;
      console.log("salt",salt);
      console.log("password",req.body.password);
      crypto.pbkdf2(req.body.password, salt , 100000, 512, 'sha512', function(err, key){
          if (err) throw err;
          var hash = key.toString('hex');
          // console.log("key",key.toString('hex'));  // 'c5e478d...1469e50'
          // console.log("user key",user.password);
          // console.log(hash === user.password)
          if(hash !== user.password){
            console.log('success')
            res.json({"success":false,"message":"Authentication failed! Incorrect password"});
          }
          else{
            console.log('failed')
            var token =  jwt.sign(req.body, config.secret);
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token,
              email:req.body.email
            });
          }
      });
    }
  });
});


module.exports=apiRoutes;
