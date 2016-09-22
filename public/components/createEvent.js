var React = require('react');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import S3FileUploader from './S3FileUploader';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Preview from './dialogbox';

var style = {
  margin:'5%'
};
var buttonStyle ={
  color:'#fff',
  fontSize:'10px',
  backgroundColor:'#000'
}

var createEvent = React.createClass({
  getInitialState:function(){
      return{
        showCheckboxes: false,
        url :'',
        startDate:'',
        enddate :'',
        open:false,
        eventObj:{}
      }
  },
  handleOpen :function(){
    this.setState({open: true});
  },
  handleClose :function(){
    this.setState({open: false});
    //this.createNewEvent();
  },
  handleCellClick:function(e){
    console.log(e);
    e.preventDefault;
    console.log(e.target);
  },
  createNewEvent:function(e){
    e.preventDefault();
    console.log("Function is called onclick of the event");
    console.log(this.refs.eventName.getValue());
    this.state.eventObj.eventName = this.refs.eventName.getValue();
    this.state.eventObj.eventorg = this.refs.eventorg.getValue();
    this.state.eventObj.startDate = this.state.startDate.toString();
    this.state.eventObj.endDate = this.state.endDate.toString();
    this.state.eventObj.teamLimit = this.refs.teamLimit.getValue();
    this.state.eventObj.themeType = this.refs.themeType.getValue();
    this.state.eventObj.eventDesc = this.refs.eventDesc.getValue();
    this.state.eventObj.eventUrl = this.state.url;
    this.state.eventObj.token= localStorage.token;
    console.log("createNewEvent",this.state.eventObj);
    this.setState({open: true});
  },
  sendthedata:function(){
    console.log(this.state.eventObj);
    this.setState({open: false});
    $.post('/createEvent',this.state.eventObj,function(data){
      if(data){
        console.log(data);
      }
    });
  },
  handleUpload(url){
    this.setState({
      url:url
    })
    console.log("###########",this.state.url);
  },
  handleStartDate:function(event,date){
    console.log("start date",date);
    this.setState({startDate:date});
  },
  handleEndDate:function(event,date){
    console.log("end date",date);
    this.setState({endDate:date});
  },
  render:function(){
    console.log("rendereedddddddddddddddddd");
    return(
      <div>

        <Card style={style}>
           <CardHeader
             title=""
             subtitle=""
           />
           <CardMedia
             overlay={<CardTitle title="Create New Event" subtitle="Submit New Event" />}
           >
           </CardMedia>
           <Table onCellClick = { (e)=>{
             e.preventDefault;
             console.log(e.target.value);
           }}>
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
              >
              <TableHeaderColumn>
              <h1>Fill this Form and click Submit in order to create New Event</h1>
              </TableHeaderColumn>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                <TableRow>
                  <TableRowColumn>Event Name</TableRowColumn>
                  <TableRowColumn><TextField ref="eventName" hintText="Enter Event Name" /></TableRowColumn>
                  <TableRowColumn>Event Organiser</TableRowColumn>
                  <TableRowColumn><TextField ref="eventorg" hintText="Enter Event Organiser"/></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Reg Start Date</TableRowColumn>
                  <TableRowColumn><DatePicker ref="startDate" onChange={this.handleStartDate} hintText="Portrait Dialog" /></TableRowColumn>
                  <TableRowColumn>Reg End Date</TableRowColumn>
                  <TableRowColumn> <DatePicker ref="endDate" onChange={this.handleEndDate} hintText="Portrait Dialog" /></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Max Team Member</TableRowColumn>
                  <TableRowColumn><TextField ref="teamLimit" hintText="Enter Team Mem Limit"/></TableRowColumn>
                  <TableRowColumn>Theme Type</TableRowColumn>
                  <TableRowColumn><TextField ref="themeType" hintText="Enter Theme Type"/></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Event Description</TableRowColumn>
                  <TableRowColumn><TextField hintText="Enter Event Description" ref="eventDesc" multiLine={true}/></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Select the Event Image that you want to upload</TableRowColumn>
                  <TableRowColumn><S3FileUploader getUrl = {this.handleUpload} /></TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>

           <CardActions>
             <FlatButton onClick={this.createNewEvent} style={buttonStyle} label="Preview" />
           </CardActions>
         </Card>
         <div>

            <Dialog
              title="Dialog With Actions"
              actions={[
                    <FlatButton
                      label="Cancel"
                      primary={true}
                      onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                      label="Submit"
                      primary={true}
                      keyboardFocused={true}
                      onTouchTap={this.sendthedata}
                    />,
                  ]}
              modal={true}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
             <Preview eventDetails = {this.state.eventObj}/>
            </Dialog>
      </div>
      </div>
    );
  }
});

module.exports = createEvent;
