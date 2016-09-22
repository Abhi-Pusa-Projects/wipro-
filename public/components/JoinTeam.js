import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TeamCard from './TeamCard';
// import Team from './Team';
const paperStyle = {
  height: '200px',
  width: '350px',
  margin: 20,
  display: 'inline-block',
};
const teamStyle = {
  height: '150px',
  width: '250px',
}
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 900,
    marginBottom: 24
  },
  spacing:{
    marginTop:'4%'
  }
};
// function TeamCard(props) {
//   return <h1> team info </h1>
// }
export default class JoinOrSearchTeam extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        teams:[],
        showFilterdTeams:true,
        searchText:this.props.searchText
      };
      this.getTeamList = this.getTeamList.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      console.log("props changed compoennt rendered",nextProps.searchText);
      var _this = this;
      this.getTeamList(nextProps.searchText);
    }

getTeamList(searchdata){
  var _this = this;
  console.log("this get team list function can be  called from all the other functions",searchdata);
  $.post('/getteams',{searchText:searchdata,token:localStorage.token},function(data){
    if(data){
      if(data.length == 0){
        console.log("no data found");
        alert("no such team found");
      }
      console.log(data);
      _this.setState({teams:data});
    }
  });

}
componentDidMount() {
  console.log("join team mounted...by",this.state.searchText);
  const _this = this;
  this.getTeamList(this.state.searchText);
}

  render() {
    return (
      <div style={styles.spacing}>
      <div style={styles.root}>
        <GridList
          cols = {3}
          cellHeight={400}
          style={styles.gridList}
          padding = {1}
          >

      {this.state.teams.map(team =>
         <TeamCard team = {team} key = {team._id} />
        )}
      </GridList>
    </div>
  </div>

    );
  }
}
