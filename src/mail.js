var nodemailer = require('nodemailer');
var crypto = require('crypto');
var mongoose = require('mongoose');


// mongoose.connect(DatabaseProps.url);
var userModel = require('./models/userModel');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://wiproevents321%40gmail.com:digitalevents@smtp.gmail.com');

// setup e-mail data with unicode symbols
exports.generateAndSendTokenToUser = function(userEmail){

crypto.randomBytes(48, function(err, buffer) {
  var token = buffer.toString('hex');
  var link = "http://localhost:3000/#/verifyEmail/"+token;
  var anchorTag = "<a href = '"+link+"'>Verify</a>"
  // console.log("link is ############" ,link);

  var mailOptions = {
      from: '"Wipro Events" <events@wipro.com>', // sender address
      to: userEmail, // list of receivers
      subject: 'Verify your email', // Subject line
      text: 'Hello world', // plaintext body
      html: '<h2>Wipro Events</h2><p>Click on the following link to activate your account - <br> '+anchorTag+'</p>' // html body
  };

  // console.log(userEmail);

  var user = new userModel({
    email: mailOptions.to,
    token: token
  })

  user.save(function(err){
    if(err){
      console.log("User already exists as a temporary user.")
    }
    else{
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        ///create a temporary user and associate token

        console.log('Message sent: ' + info.response);
    });
  }
});



});
}


  exports.verifyToken = function(token,cb){
  console.log("IN verify with token as: "+ token)
  userModel.findOne({'token':token},'email',function(err,user){
    console.log("Token attached to the following email:"+ user.email);
    cb(user.email);
   });
}
