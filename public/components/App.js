import React,{PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import JoinTeam from './JoinTeam';
import TextField from 'material-ui/TextField';
import {Router ,Route,Link ,browserHistory ,IndexRoute} from 'react-router';
injectTapEventPlugin();


const divStyle = {
  margin : '-8px'
}

const buttonWrapperStyle = {
  margin: '8px'
}

const textFieldInputStyle = {
  color: "#FFF"
}

const textFieldHintStyle = {
  color: "#FFF"
}

const textFieldWrapperStyle = {
  marginTop : "-8px",
  marginBottom: "10px",
  float:'left'

  // height: "inherit"
  // background: "wte"
}


const App = React.createClass({
  handleKeyDown(e){
    if (e.keyCode == 13) {
      this.context.router.push({
        pathname:'/joinTeam',
        state: { searchText: e.target.value }
      })

    }
  },
  render:function(){
    return(
      <div style = {divStyle}>
      <AppBar
        showMenuIconButton = {false}
       title="digi thon"



       iconElementRight={
       <div style = {buttonWrapperStyle}>
       <TextField style = {textFieldWrapperStyle}
       hintText="Search"
       onKeyDown = {this.handleKeyDown}
       inputStyle = {textFieldInputStyle}
       hintStyle = {textFieldHintStyle}

       />
          <FlatButton label="Login" containerElement={<Link to="loginReg"/>} />
          <FlatButton label="Profile" containerElement={<Link to="profile"/>} />
          <FlatButton label="Dashboard" containerElement={<Link to="dashboard"/>} />
          <FlatButton label="Logout" containerElement={<Link to="logout"/>} />
       </div>
      }

      />
      {this.props.children}
      </div>
    );
  }
});

App.contextTypes = {
  router: React.PropTypes.object
}

module.exports = App;
