import React from 'react';


var Logout = React.createClass({
  getInitialState:function(){
    return{message:""};
  },
  componentWillMount:function(){
    console.log("component will mount is being called in logout section");
    console.log("localStorage-token",localStorage.token ==="undefined");
    if(localStorage.token === "undefined"){
      this.setState({message:"User is already logged out"});
      console.log("message",this.state.message);
    }else{
      this.setState({message:"User has successfully logged out."});
      localStorage.token = undefined;
    }
  },
  render:function(){
    return(
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
});


module.exports = Logout;
