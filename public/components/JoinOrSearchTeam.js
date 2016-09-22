import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const style = {
  height: '300px',
  width: '500px',
  margin: 20,
  display: 'inline-block',
};

export default class JoinOrSearchTeam extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        dataSource: ["team1","team2","team3"],
        registerMessage: "Register your Team",
        teamPresent:false,
        teamAlreadyPresent:false,
        userHasCreatedTeam: false,
        team:{
          name:""
        }
      };
    }
// send request to server and on response show the status of request
   handleJoinRequest(e){
     e.preventDefault();
     const {searchText ,open} = this.refs.search.state
     let temp = this.state.dataSource.filter((team)=> team == searchText)
     if (!open && temp) {
      console.log(temp); //send join request to server
      this.setState({
        teamPresent:true
      });
     }
     if (temp.length == 0) {
       this.setState({
         teamPresent:false
       });
     }
   }

handleCreateRequest(e){
  e.preventDefault();
  console.log(this.state.newteamName);
}
handleBlur(e){
  // console.log(e.target.value);
  let temp = this.state.dataSource.filter((team)=> team == e.target.value)
  if(temp.length > 0){
    this.setState({
      teamAlreadyPresent : true,
      userHasCreatedTeam:false
    });
  }
  else {
    this.setState({
      newteamName:e.target.value,
      teamAlreadyPresent:false,
      userHasCreatedTeam: true
    });
  }
}
  render() {

    return (
      <div style = {{marginLeft: '4%' ,display: 'flex'}}>
      <Paper style={style} zDepth={1} >
      <div style = {{marginLeft:'4%'}}>
      <h4 style = {{textAlign: 'center'}}>{this.state.registerMessage}</h4>
      <TextField
      hintText="Team Name"
      floatingLabelText="Enter Team Name"
      onBlur = { this.handleBlur.bind(this)}
      disabled = {this.state.userHasCreatedTeam}
      />
    <FlatButton label="Create Team" primary={true} onClick = {this.handleCreateRequest.bind(this)} />
    <br />
    { this.state.teamAlreadyPresent ? <span style={{fontSize: '15px', color:'red'}}> cannot register! team Already present </span>: <span />}
      </div>

      </Paper>
      <Paper style={style} zDepth={1} >
      <h4 style = {{textAlign: 'center'}}>join a team </h4>
      <AutoComplete
      dataSource={this.state.dataSource}
      floatingLabelText="Find Teams"
      style = {{marginLeft: '4%'}}
      ref = "search"
      />
      <FlatButton label="Send Request" style = {{backgroundColor:'black', marginLeft:'4%'}} primary={true} onClick = {this.handleJoinRequest.bind(this)} />
      {this.state.teamPresent ? <span style = {{display:'block',marginLeft:'4%',fontSize:'13px',color:'green'}}>team available - request sent </span> :<span />}
      </Paper>
     </div>
    );
  }
}
