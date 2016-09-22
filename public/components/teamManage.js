var React = require('react');
import JoinOrSearchTeam from '../components/JoinOrSearchTeam';
import JoinTeam from '../components/JoinTeam';
import CreateTeam from '../components/createTeam';
import {Tabs, Tab} from 'material-ui/Tabs';
var cardStyle1 ={
  margin:'40px 100px'
}

var TeamManage = React.createClass({
  getInitialState:function(){
    return {
      value: 'a'
    }
  },
  handleChange:function(value){
    this.setState({
      value: value,
    });
  },
  render:function(){
    return(
        <div>
          <div style={cardStyle1}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
              >
                <Tab label="CEATE TEAM" value="a" >
                  <div>
                    <p>
                      CREATE TEAM
                    </p>
                    <CreateTeam />
                  </div>
                </Tab>
                <Tab label="JOIN A TEAM" value="b">
                  <div>
                    <p>
                      JOIN TEAM
                    </p>
                    <JoinTeam />
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>
    );
  }
});

module.exports = TeamManage;
