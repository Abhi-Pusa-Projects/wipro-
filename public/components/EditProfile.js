import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
var style = {
  margin: '10% 20%',
  padding: '2%',
  textAlign: 'center'
};

export default class EditProfile extends React.Component{

  render(){
    return(

      <Paper style={style} zDepth={3}>
        <h2>Edit Profile</h2>
      </Paper>

    );
  }
}
