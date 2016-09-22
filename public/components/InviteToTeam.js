import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';


const hintStyle = {
textAlign:'center',
  width:"100%"
// color:"#FFFFFF"

};

const textFieldStyle = {
 textAlign:'center'
 // width:'100%',
 // color:"#FFFFFF"
};

const chipStyle = {
    margin: '4'
  };
const  chipWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  };

export default class InviteToTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchText: ""};
    this.TextFieldHandler = this.TextFieldHandler.bind(this);
    this.KeyPressHandler = this.KeyPressHandler.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);

  }

  handleRequestDelete(member){
    console.log("Delete Chip ",member);
    var members = this.props.members;
    var index = members.indexOf(member);
    members.splice(index,1);
    this.props.update({
      members : members
    });
  }

  TextFieldHandler(e) {
    this.setState({
        searchText: e.target.value
    });
    };

  KeyPressHandler(e){
    if(e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 186){
      console.log(this.state.searchText);
      var members = this.props.members
      //Ajax call => if the member exists an invitaion link will be sent and member will be added to invite property of team object if successful
        this.state.searchText.split(";").forEach(function (value) {
          members.push(value.trim());
        })
        this.props.update({
          members : members
        });
        this.setState({
          searchText: ""
        })
    }
  }

  render() {
      var chips = this.props.members.map(function (member) {
      return (
        <Chip key = {member} onRequestDelete={() => this.handleRequestDelete(member)} style = {chipStyle}>
        {member}
      </Chip>
        );
      }.bind(this));

    return (
      <div>
        <TextField
          hintText="Enter email address and press Enter"
          hintStyle={hintStyle}
          inputStyle={textFieldStyle}
          fullWidth={true}
          onChange = {this.TextFieldHandler}
          value={this.state.searchText}
          onKeyDown = {this.KeyPressHandler}
        />

        <div style = {chipWrapperStyle}>
          {chips}
        </div>
      </div>
    );
  }
}
// <br/>
// <i className="material-icons">person_add</i>
// <i className="material-icons">&#xE7FE;</i>
