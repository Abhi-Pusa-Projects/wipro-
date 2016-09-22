import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';


const hintStyle = {
textAlign:'center'
// width:"500px",
// color:"#FFFFFF"

};

const textFieldStyle ={
 textAlign:'center'
 // width:'100%',
 // color:"#FFFFFF"
};

const themeStyle = {
  color: '#00bcd4'
}


export default class FinishTeam extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var teamMembers = this.props.team.members.map(function (member) {
      return(
        <li>{member}</li>
      );
    })
    return (
      <div>


        <h3>{this.props.team.name}<small><i style = {themeStyle}><br/>{this.props.team.theme}</i></small></h3>
        <Divider/>
        <p>
        {this.props.team.description}<br/>
        </p>
        <ul> {teamMembers} </ul>

      </div>
    );
  }
}
// <br/>
// <i className="material-icons">person_add</i>
// <i className="material-icons">&#xE7FE;</i>
