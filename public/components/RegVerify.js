import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
var style = {
  margin: '10% 20%',
  padding: '2%',
  textAlign: 'center'
};

export default class RegVerify extends React.Component{

  render(){
    return(

      <Paper style={style} zDepth={3}>
        <h2>Verify your Email</h2>
        <h4>Head over to your inbox and click on the link in the description.</h4>
      </Paper>

    );
  }
}
