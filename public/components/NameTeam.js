import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import themes from '.././config/themes';

// const items = [
//   <MenuItem key={1} value={"Theme A"} primaryText="Theme A" />,
//   <MenuItem key={2} value={"Theme B"} primaryText="Theme B" />,
//   <MenuItem key={3} value={"Theme C"} primaryText="Theme C" />,
//   <MenuItem key={4} value={"Theme D"} primaryText="Theme D" />,
//   <MenuItem key={5} value={"Theme E"} primaryText="Theme E" />,
// ];

var items;


const hintStyle = {
// textAlign:'center',
width:'100%'
// color:"#FFFFFF"

};

const textFieldStyle ={
 // textAlign:'center',
 width:'100%',
 // color:"#FFFFFF"
};

const floatTextStyle ={
 // textAlign:'left',
 width:'100%',
 // color:"#FFFFFF"
};


export default class NameTeam extends React.Component {

  constructor(props) {
    super(props);
    this.teamNameHandler = this.teamNameHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.teamDescriptionHandler = this.teamDescriptionHandler.bind(this);
    var i = 0;
    items = themes.map(function (item) {
      i++;
      return (<MenuItem key={i} value={item} primaryText={item} />);
    })
  }

  handleChange(e, index, value){
    e.preventDefault();
    this.props.update({
      theme : value,
    });
  }

  teamNameHandler(e) {
    e.preventDefault();
    this.props.update({
        name: e.target.value
    });
    };


  teamDescriptionHandler(e) {
    e.preventDefault();
    this.props.update({
        description: e.target.value
    });
    };

  render() {
    return (

      <div>

        <SelectField
          value={this.props.theme}
          onChange={this.handleChange}
          floatingLabelText="Theme"
          fullWidth={true}
        >
          {items}
        </SelectField>
        <TextField
          name = "teamNameField"
          floatingLabelText="Name your team"
          floatingLabelStyle={floatTextStyle}
          inputStyle={textFieldStyle}
          fullWidth={true}
          onChange = {this.teamNameHandler}
          value={this.props.name}/>
        <br/>
        <TextField
          name = "teamDescriptionField"
          floatingLabelText="Describe Your team"
          floatingLabelStyle={floatTextStyle}
          textareaStyle={textFieldStyle}
          fullWidth={true}
          multiLine = {true}
          onChange = {this.teamDescriptionHandler} value={this.props.description}/>
        <br/>
      </div>
    );
  }
}
