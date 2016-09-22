import React from 'react';
import {Router ,Route ,hashHistory ,IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import getMuiTheme from 'material-ui/styles/getMuiTheme' ;
import AppDashboard from '../container/AppDashboard';
import RegisterTeam from '../container/RegisterTeam'
import VerifyEmail from '../components/VerifyEmail';
import RegText from '../components/RegText';
import RegVerify from '../components/RegVerify';
import LoginReg from '.././components/LoginReg';
import Logout from '.././components/Logout';
import CreateTeam from '.././components/CreateTeam';
import S3FileUploader from '../components/S3FileUploader';
import JoinTeam from '../components/JoinTeam';
import Empty from '../components/Empty';
import ViewTeam from '../components/ViewTeam';
import createEvent from '../components/createEvent';
var Profile = require('../components/Profile');
var App = require('../components/App');

import {
  red500, grey400, grey500, grey600, grey700,
  transparent, lightWhite, white, darkWhite, lightBlack, black,
} from 'material-ui/styles/colors';
// import Colors from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
  palette: {
    textColor: "#000",
  },
  appBar: {
    height: 50,
    color: black,
    // margin: "-8px"
  },
  raisedButton: {
      color: black,
      textColor: white,
      primaryColor: black,
      primaryTextColor: white,
       disabledColor: grey400,
      disabledTextColor: lightBlack,

  },
  flatButton: {
      color:black,
      textColor: white,
      primaryTextColor: white,
      secondaryTextColor: black,
  }

});

function JoinTeamWrapper(props) {
  return <JoinTeam searchText = {props.location.state.searchText} />
}

var Routes = (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Router history = {hashHistory}>
    <Route path = "/" component = {App}>

       <IndexRoute component={LoginReg} />
       <Route path = "empty" component = {Empty} />
       <Route path = "loginReg" component = {LoginReg} />
       <Route path = "profile" component = {Profile} />
       <Route path = "dashboard" component = {AppDashboard} />
       <Route path = "verify" component = {RegVerify} />
       <Route path = "joinTeam" component = {JoinTeamWrapper} />
       <Route path = "viewTeam/:teamId" component = {ViewTeam} />
       <Route path = "registerTeam/:teamId" component = {RegisterTeam} />
       <Route path = "verifyEmail/:token" component = {VerifyEmail} />
       <Route path = "logout" component={Logout} />
       <Route path = "uploadFile" component={S3FileUploader} />
       <Route path = "createEvent" component = {createEvent} />
    </Route>
 </Router>
 </MuiThemeProvider>
);

var Dashboard = React.createClass({
  render:function(){
    return(
      <div>
        this is the dashboard section
      </div>
    );
  }
});

var Some = React.createClass({
  render:function(){
    return(
      <div>
        this is the some section
      </div>
    );
  }
});

module.exports = Routes;
