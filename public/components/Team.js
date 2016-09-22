import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import Event from '../components/Event.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '100px'
  },
  gridList: {
    width: 850,
    marginBottom: 24
  },
};

const Team = React.createClass({
  // <SingleTeam SingleEvent = {event}  />
  componentWillReceiveProps: function(nextProps) {
    console.log("helllo in teamjs");
  },
  render () {
    return (
      <div style={styles.root}>
        <GridList
          cols = {3}
          cellHeight={400}
          style={styles.gridList}
          padding = {1}
          >

        {this.props.teams.map((event,index)=>(
          <GridTile style = {{marginLeft: 20}} key = {index} >
          <h1> hello </h1>
          </GridTile>
        ))}


        </GridList>
      </div>
    )
  }
})

export default Team;
