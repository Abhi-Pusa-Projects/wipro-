import React, { PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Event from '../components/Event.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '100px'
  },
  gridList: {
    width: 800,
    marginBottom: 24
  },
};

const Dashboard = React.createClass({
  render () {
    return (
      <div style={styles.root}>
        <GridList
          cols = {3}
          cellHeight={400}
          style={styles.gridList}
          padding = {1}
          >

        {this.props.events.map((event,index)=>(
          <GridTile style = {{marginLeft: 20}} key = {index} >
            <Event SingleEvent = {event}  />
          </GridTile>
        ))}
        </GridList>
      </div>
    )
  }
})

export default Dashboard;
