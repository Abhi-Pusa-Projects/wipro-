var express = require('express');
var router = express.Router();
var teams = require('./teamModule');
var User = require('./users');
var events = require('./events');
var Promise = require('promise');

router.post('/',function(req,res,next){
  // req.body = JSON.parse(JSON.stringify(req.body));
  // console.log("parsed json ######### ",req.body.members , req.body.name);
  var temp = Object.assign({},req.body);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$' ,temp ,temp['members[]']);
  var obj = { team_obj:{
                            teamName :"",
                            teamAdmin : undefined,
                            teamMembers:[],
                            eventId:"",
                            teamDesc:"",
                            theme:""
                       },
              res : res
  };
  obj.team_obj.teamName = temp.name;
  obj.team_obj.eventId  = temp.eventId;
  console.log("-=============",temp['members[]'].length,typeof(temp['members[]']));
  obj.team_obj.teamMembers = (typeof(temp['members[]'])=="string")?(temp['members[]'].split(',')):(temp["members[]"]);
  obj.team_obj.teamDesc = temp.description;
  obj.team_obj.theme = temp.theme;
  console.log("object",obj.team_obj);
//call the function to check the user details
var checkEvent = fncheckevent(obj.team_obj);
  checkEvent.then(fncheckuserdetails.bind(obj)).catch(errback.bind(res));

});

//function that is called when the error happned
function errback(){
  console.log("some error happened");
  this.send("some error happned");
}

//function to check the event exists or not
function fncheckevent(team_obj){
  var checkevent = new Promise(function(resolve,reject){
    console.log(team_obj.eventId);
    events.find({_id:team_obj.eventId},function(err,data){
      if(!err){
        console.log("called the call back function",data);
        resolve(true);
      }
      else{
        console.log("some error happened");
        reject(false);
      }
    })
  });
  return checkevent;
}

//function to call the check user list
function fncheckuserdetails(data,err){
  console.log(data,this.team_obj);
  var checkUser = fncheckusers(this.team_obj);
  checkUser.then(fninsertUser.bind(this)).catch(errback.bind(this.res));
}

//funtion to check of the users are available or not
function fncheckusers(team_obj){
  var user_array = team_obj.teamMembers;
  if(team_obj.teamAdmin !== undefined) {user_array.push(team_obj.teamAdmin)};
  console.log("user array",user_array);
  var checkuser= new Promise(function(resolve,reject){
    User.find({email:{$in:user_array}},function(err,data){
        console.log("fetched data",data.length,user_array.length);
        if(data.length == user_array.length){
          console.log("all the data has been found");
          resolve(true);
        }
        else{
          console.log("all the members has not been found");
          reject(false);
        }
    });
  })
  return checkuser;
}

//function to insert new team in the team collection
function fninsertUser(data,err){
  console.log(err);
  console.log("we are calling from insert user",data,this.res);
  var _this = this;
  var newTeam = new teams(this.team_obj);
  newTeam.save(function(err){
    if(!err){
      console.log("new team created");
      _this.res.send("new team created");
    }
    else{
      console.log("new team not created",err);
     _this.res.send("new team not created");
    }
  })
}

module.exports = router;
