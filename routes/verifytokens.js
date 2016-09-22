var express = require('express');
var apiRoute = express.Router();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

apiRoute.use(function(req, res, next) {
 //res.send("its reaching over here",req.body.token);
  // check header or url parameters or post parameters for token
  var token = req.body.token;
  console.log(token);
  // decode token
  if (token) {
    // verifies secret and checks exp
    var decoded = jwt.verify(token, config.secret);
    var email = decoded.email;
    console.log(email);
    req.isValidUser = true;
    next();
    //res.send({"email":email});
  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

module.exports= apiRoute;
