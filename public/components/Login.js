var React = require('react');
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style={
  height: "450px",
  width: "400px",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  fontFamily:"'Roboto', sans-serif"

};
const button={
  margin: 12
};
const FlatButtonStyle={
  fontStyle: 'italic'
};

var Login = React.createClass({
  authenticate:function(){
    //console.log(this.refs.username.getValue(),this.refs.password.getValue());
    var url="http://localhost:3000/authenticate";
    if(typeof(Storage) !== undefined){
      var authenticate_obj = {
        "email":this.refs.username.getValue(),
        "password":this.refs.password.getValue()
      };
      $.post(url,authenticate_obj,function(data){
        console.log(arguments);

          console.log(data);
          if(data.success == true){
            localStorage.token= data.token;
            localStorage.email = data.email;
            location.replace('/#/dashboard');
          }
          else{
            alert("user not logged in");
            location.replace('/#/loginReg');
          }
      });
    }
  },
  render: function() {
    return (
      <div style={{textAlign:'center'}}>
        <div style={style} >
          <h1>Login</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <TextField ref="username" floatingLabelText="Email"/>
              </div>
              <div className="col-sm-12">
                <TextField ref="password" type="Password"  floatingLabelText="Password"/>
              </div><br/>
              <div className="col-sm-12">
                  <RaisedButton label="Login" primary={true} style={button} onClick={this.authenticate}/>
              </div>
            </div>
            <div className="col-sm-12">

            </div>
          </div>
        </div>
      </div>
    );
  }
});
// <FlatButton style={FlatButtonStyle} label="Register" />
// <FlatButton style={FlatButtonStyle} label="Forgot Password" />
module.exports = Login;
