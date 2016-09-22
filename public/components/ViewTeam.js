import React, { PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
class ViewTeam extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        teams:{}
      };
    }
  componentWillMount() {
      console.log("props changed compoennt rendered",this.props.params.teamId);
      var _this = this;
      $.post('/getteams',{searchText:this.props.params.teamId,token:localStorage.token},function(data){
        if(data){
          if(data.length == 0){
            console.log("no data found");
            alert("no such team found");
          }
          console.log(data);
          _this.setState({teams:data[0]});
        }
      });
  }
  render () {
     return (
     <div style = {{width:'800px',height:'300px',margin:'auto',marginTop:'2%',textAlign:'center'}}>
           <Card>
               <CardMedia
               >
               <img style={{height:'200px'}} src = {this.state.teams.teamUrl} alt = "image not avlbl" />
               </CardMedia >
               <CardTitle subtitle={this.state.teams.teamName} />
               <CardText>
                 <Table onCellClick = { (e)=>{
                   e.preventDefault;
                   console.log(e.target.value);
                 }}>
                    
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>Team Name</TableRowColumn>
                        <TableRowColumn>{this.state.teams.teamName}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Team Theme</TableRowColumn>
                        <TableRowColumn>{this.state.teams.teamTheme}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Team Description</TableRowColumn>
                        <TableRowColumn>{this.state.teams.teamDesc}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Team members</TableRowColumn>
                        <TableRowColumn>{this.state.teams.teamMembers}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Team Rating</TableRowColumn>
                        <TableRowColumn>{this.state.teams.teamRating}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Team Comment</TableRowColumn>
                        <TableRowColumn>{this.state.teams.teamComment}</TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
               </CardText>
               <CardActions>
                 <FlatButton label="Edit" />
               </CardActions>
             </Card>
     </div>
   )
  }
}

export default ViewTeam;
