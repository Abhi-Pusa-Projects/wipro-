var express = require('express');
var router = express.Router();
var Registrar = require('.././src/mail.js');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 

router.post('/register', function(req, res, next) {
  console.log("Email received as ", req.body.email);
  Registrar.generateAndSendTokenToUser(req.body.email);
});

router.get('/iverify/:token',function(req,res,next){

  console.log("Getting token as: "+ req.params.token);
  Registrar.verifyToken(req.params.token,function (useremail) {
    if (useremail != undefined) {
      var token =  jwt.sign(req.body, config.secret);
      console.log("##############useremail",useremail,token);
      res.send(JSON.stringify({token:token,email:useremail}));
    }
  })
})

module.exports = router;
