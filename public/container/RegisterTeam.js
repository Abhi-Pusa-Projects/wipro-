import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import CreateTeam from '../components/CreateTeam';
import FlatButton from 'material-ui/FlatButton';

var Remarkable = require('remarkable');
var md = new Remarkable();
var cardStyle ={
  margin:'40px 100px'
}
var imageStyle={
  height:'300px'
}
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
export default class RegisterTeam extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: "",
      event1:this.props.location.state,
      open:false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillMount(){
    console.log("component section will be called from here");
    if(localStorage.token == "undefined"){
      location.replace('/#loginReg');
    }
  }
  componentDidMount() {
    var input = '# Information about the event\n\n source: md file';
    var markdown = md.render(input);
    this.setState({
      markdown
    });
  }
  handleOpen(){
    this.setState({open: true});
  }
  handleClose(){
    this.setState({open: false});
    //this.createNewEvent();
  }
  render () {
   console.log("Register team " ,this.props.location.state);
   console.log("register team is rendered each time");
    // <JoinOrSearchTeam />
    return (
      <div>
      <div>
      <Card style={cardStyle}>

         <CardMedia
           overlay={<CardTitle title={this.state.event1.event.eventName} subtitle={this.state.event1.event.eventorg}/>}
         >
           <img src={this.state.event1.event.eventUrl} style={imageStyle}/>
         </CardMedia>
         <CardText>
           <Table>
             <TableBody displayRowCheckbox={false}>
             <TableRow>
               <TableRowColumn>Event Name</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.eventName}</TableRowColumn>
               <TableRowColumn>Event Organiser</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.eventorg}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Reg. Start date</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.startDate}</TableRowColumn>
               <TableRowColumn>Reg. End Date</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.endDate}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Team Mem Limit:</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.teamLimit}</TableRowColumn>
               <TableRowColumn>Theme type</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.themeType}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Event Description</TableRowColumn>
               <TableRowColumn>{this.state.event1.event.eventDesc}</TableRowColumn>
             </TableRow>
             </TableBody>
           </Table>
         </CardText>
       </Card>
      </div>
      <FlatButton label="Ceate New User" onClick={this.handleOpen} />
          <div>
             <Dialog
               title="Dialog With Actions"
               actions={[
                     <FlatButton
                       label="Close"
                       primary={true}
                       onTouchTap={this.handleClose}
                     />,
                   ]}
               modal={true}
               open={this.state.open}
               onRequestClose={this.handleClose}
             >
              <CreateTeam eventId={this.state.event1.event._id}/>
             </Dialog>
       </div>
      </div>
    )
  }
}
