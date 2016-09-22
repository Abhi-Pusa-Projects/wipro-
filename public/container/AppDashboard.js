import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dashboard from './Dashboard.js';
// import Register from '../components/Register';


 export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eventsArray: [],
      dummy: 5
    }
  }
  componentWillMount() {

    var url="http://localhost:3000/getEventsList";
    var self = this;
    console.log("localStorage",localStorage.token);
    if(localStorage.token !== undefined){
        $.post(url,{token:localStorage.token},function(data){
          console.log("requesting data for dashboard" ,data);
          self.setState({eventsArray:data});
        })
    }

    // this.setState({
    //     eventsArray:[
    //       {
    //         "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
    //         "eventName": "Event Name",
    //         "eventid": "1",
    //         "finished": true
    //       },{
    //         "eventName": "Event Name",
    //         "finished": true,
    //         "eventid": "2",
    //         "url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
    //       },{
    //         "eventName": "Event Name",
    //         "eventid": "3",
    //         "finished": false,
    //         "url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
    //
    //       },{
    //         "eventName": "Event Name",
    //         "eventid": "4",
    //         "finished": false,
    //         "url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
    //       }
    //     ]
    //   });

  }
  render(){

    // <Register />
    // <TitleBar title="wipro Digital" />
    return(
        <div>
          <Dashboard events = {this.state.eventsArray} check = {this.state.dummy} />
        </div>
    );
  }
}
