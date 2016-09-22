import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';


const Event = React.createClass({
  contextTypes:{
    router : React.PropTypes.object.isRequired
  },
  handleRegister(e){
    e.preventDefault();
    let eventURL = "/RegisterTeam/" + this.props.SingleEvent.eventid;
    this.context.router.push({
      pathname: eventURL,
      state:  {
        event : this.props.SingleEvent
      }
    })
  },
  render () {
      const eventurl = "/RegisterTeam/" + this.props.SingleEvent.eventid;
    return (
      <Card>
        <CardHeader
        title={this.props.SingleEvent.eventName}
        />

        <CardMedia
        overlay={<CardTitle subtitle="some discription is here along withsome " />}
        >
        <img src= {this.props.SingleEvent.eventUrl} />
        </CardMedia>
        <CardActions style={{textAlign:'center'}}>
           <Link to = {eventurl}>
            <RaisedButton primary={true} style={{margin: 12}} onClick = {this.handleRegister} >{this.props.SingleEvent.finished ?  <span style = {{color:'white'}}>register</span> : <span style = {{color:'white'}}>closed</span>}
            </RaisedButton>
           </Link>
        </CardActions>
      </Card>
    )
  }
})

export default Event;
