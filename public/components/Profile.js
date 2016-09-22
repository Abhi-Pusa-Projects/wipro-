var React = require('react');
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const paperstyle = {
  height:530,
  width:400,
  textAlign:'center',
  display: 'inline-block',
  margin: 20
}

var  Profile = React.createClass({
  componentWillMount:function(){
    console.log("component will mount is called here",(localStorage.token=="undefined"));
    if(localStorage.token == "undefined"){
      location.replace('/#loginReg');
      console.log(location);
    }
  },
  updatetheprofile:function(){
     console.log("in update profile=",localStorage.token,this.props.email == "undefined");
    if(localStorage.token !== "undefined" && (this.props.email !== undefined || localStorage.email !== "undefined")){
      console.log(this.refs.fullName.getValue(),this.refs.location.getValue(),this.refs.password.getValue(),this.refs.c_password.getValue());
      var profile_obj ={
          "fullName":this.refs.fullName.getValue(),
          "location":this.refs.location.getValue(),
          "password":this.refs.password.getValue(),
          "email":(this.props.email=== undefined)?localStorage.email:this.props.email,
          "token":localStorage.token
      }
      var url= "http://localhost:3000/updateprofile";
      if(this.refs.password.getValue() === this.refs.c_password.getValue()){
        console.log("inside if statement");
        $.post(url,profile_obj,function(data){
          console.log(data);
          location.replace('/#dashboard');
        });
      }else{
        alert("password and confirm password password should match");
      }
    }
    else{
      location.replace('/#loginReg');
    }
  },
  render: function() {
    return (
      <div style={{textAlign:'center'}}>
         <Paper style={paperstyle} zDepth={5}>
         <h1>Profile Details</h1>
          <div>
            <TextField ref="fullName" hintText="Full Name" floatingLabelText="Enter Full Name"/>
          </div>
          <div>
            <TextField ref="location" hintText="Location" floatingLabelText="Enter Location"/>
          </div>
          <div>
            <TextField type="password" ref="password" hintText="Password" floatingLabelText="Enter Password"/>
          </div>
          <div>
            <TextField type="password" ref="c_password" hintText="Confirm password" floatingLabelText="Confirm Password"/>
          </div><br/><br />
          <div>
            <RaisedButton label="Submit" onClick={this.updatetheprofile} primary={true}></RaisedButton>
          </div>
        </Paper>
      </div>
    );
  }
});

module.exports = Profile ;
