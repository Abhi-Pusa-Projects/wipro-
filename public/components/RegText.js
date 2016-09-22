import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SubmitButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import RegVerify from '../components/RegVerify';
import axios from 'axios';

var backgroundStyle,textStyle,textFieldStyle,hintStyle;

 backgroundStyle = {backgroundImage:"url('resources/back-3.jpg') no-repeat", width: "100%",height: "100%"}

// backgroundImage:"url('.././resources/back4.jpg') ", backgroundRepeat:"no-repeat",backgroundColor:"#000000",
var backgroundStyle = { width: "100%",height: "100%",marginTop: '1%',paddingTop:"50px",paddingBottom:"100px",paddingRight:0,paddingLeft:0}

var textStyle = {fontFamily:"'Roboto', sans-serif", margin:'10% 30%', textAlign:'center',color:"#FFFFFF"};

 textStyle = {fontFamily:"'Roboto', sans-serif", textAlign:'center'};

 textFieldStyle ={
  textAlign:'center',
  width:'400px',
  // color:"#FFFFFF"
}
 hintStyle ={
textAlign:'center',
width:"100%",
// color:"#FFFFFF"

}

export default class RegText extends React.Component{
  constructor(props){
    super(props);
   this.state = {email: ""};
   this.TextFieldHandler = this.TextFieldHandler.bind(this);
 }
  TextFieldHandler(e) {
        console.log("TextFieldHandler");
        this.setState({
            email: e.target.value
        });
    };
  SubmitButtonHandler(){
    console.log("Sending email - ",this.state.email);
    axios.post('/register', {
    email: this.state.email
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
render(){
    return(
      <div id = "regTextWrapper" style = {backgroundStyle}>
        <div style = {textStyle}>
          <h1> Wipro Events </h1>
          <h3> Design and Innovate.</h3>
          <TextField hintText="Enter your email id" hintStyle={hintStyle} inputStyle={textFieldStyle} fullWidth={true} onChange = {this.TextFieldHandler}/>
          <br/>
          <SubmitButton primary={true} onClick={this.SubmitButtonHandler.bind(this)} containerElement={<Link to="verify"/>}  label="Let's do it" />
        </div>
      </div>
    );
  }
}
