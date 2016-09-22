var React = require('react');
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var Preview = React.createClass({
  render:function(){
      console.log(this.props.eventDetails);
    return(
      <div>
        <Table onCellClick = { (e)=>{
                e.preventDefault;
                console.log(e.target.value);
              }}>
                 <TableHeader
                   displaySelectAll={false}
                   adjustForCheckbox={false}
                 >
                 <TableHeaderColumn>
                 <h1>Preview of the event Details</h1>
                 </TableHeaderColumn>
                 </TableHeader>
                 <TableBody displayRowCheckbox={false}>
                   <TableRow>
                     <TableRowColumn>Event Name</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.eventName}</TableRowColumn>
                     <TableRowColumn>Event Organiser</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.eventorg}</TableRowColumn>
                   </TableRow>
                   <TableRow>
                     <TableRowColumn>Reg Start Date</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.startDate}</TableRowColumn>
                     <TableRowColumn>Reg End Date</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.endDate}</TableRowColumn>
                   </TableRow>
                   <TableRow>
                     <TableRowColumn>Max Team Member</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.teamLimit}</TableRowColumn>
                     <TableRowColumn>Theme Type</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.themeType}</TableRowColumn>
                   </TableRow>
                   <TableRow>
                     <TableRowColumn>Event Description</TableRowColumn>
                     <TableRowColumn>{this.props.eventDetails.eventDesc}</TableRowColumn>
                   </TableRow>
                 </TableBody>
               </Table>
      </div>
    );
  }
});

module.exports = Preview;
