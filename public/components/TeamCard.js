import React from 'react';
import {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
function Rating(props) {
  let temp = props.rating;
  console.log("inside the rating function",props.rating);
  if (props.rating < 1) {
    return <p style = {{marginTop: '10%'}}> rating not available / not evaluated </p>
  }

  let gradeArray = [];
  while (temp > 0) {
    gradeArray.push(temp);
    temp --;
  }

  // <p style= {{marginTop: '-5px'}}>{props.comment} </p>
  return (
       <div style = {{marginTop: '10px'}}>
      {
      gradeArray.map(function (grade) {
        return <i className="material-icons">grade</i>
      })
      }
    </div>
  )
}
export default class TeamCard extends React.Component{
render(){
  console.log("hey ",this.props.team.teamRating,this.props.team.teamName);
  const requestUrl = 'sendRequest/'+ this.props.team.teamName;
  const viewUrl = 'viewTeam/'+this.props.team.teamName;
  return (
    <Card style = {{marginLeft: '5%'}}>
      <CardHeader
      title={this.props.team.teamName}
      />
      <CardMedia
      overlay={<CardTitle subtitle={this.props.team.teamDesc} />}
      >
      <img src = {this.props.team.teamUrl} alt = "image not avlbl" />
      </CardMedia >
    { this.props.team.finished ? (
      <CardActions style ={{display :'flex'}} >
      <Link to = {requestUrl}  >
      <RaisedButton label="join" primary={true}  />
      </Link>
      <Link to = {viewUrl} >
      <RaisedButton label="view" primary={true} />
      </Link>
      </CardActions>
    ) : <Rating rating = {this.props.team.teamRating} comment = {this.props.team.teamComment}/>
  }
  </Card>
)
 }
}
