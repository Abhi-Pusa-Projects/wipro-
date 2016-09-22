import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import NameTeam from './NameTeam'
import InviteToTeam from './InviteToTeam'
import FinishTeam from './FinishTeam'
// import Paper from 'material-ui/Paper';


 export default class CreateTeam extends React.Component{


   constructor(props){
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      team: {
        eventId :this.props.eventId,
        name: "",
        theme: null,
        description: "",
        members: []
      }
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.editTeam = this.editTeam.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
  }

  handleNext() {
    const stepIndex = this.state.stepIndex;
    var team = this.state.team;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
      // team: team
    });
    console.log(this.state);
  };

  handleFinished() {
    const stepIndex = this.state.stepIndex;
    var team = this.state.team;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
      // team: team
    });
    console.log(this.state);
    console.log("call the api to create new team in the server",this.state.team);
    var obj = this.state.team;
    obj.token = localStorage.token;
    $.post('/createteam',obj,function(data){
      if(data){
        console.log(data);
      }
    });
  };

  handlePrev() {
    const stepIndex = this.state.stepIndex;
    var team = this.state.team;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
    console.log(this.state);
  };

  editTeam(params){
    var team = this.state.team;
    Object.keys(params).forEach(function (key) {
      team[key] = params[key];
    })
    this.setState({
        team: team
    })
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <NameTeam name={this.state.team.name} theme = {this.state.team.theme} description = {this.state.team.description} update = {this.editTeam}/>
        );
      case 1:
        return (
          <InviteToTeam members = {this.state.team.members} update = {this.editTeam}/>
        );
      case 2:
        return (
          <FinishTeam team = {this.state.team} />
        );
      default:
        return 'I don\'t think you should be here somewhere.';
    }
  }

  render() {
    const finished = this.state.finished;
    const stepIndex = this.state.stepIndex;
    const contentStyle = {margin: '20px 16px'};
    const containerStyle = {
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
        fontFamily:"'Roboto', sans-serif"};
    const buttonContainerStyle = {
      margin: '20px auto',
      textAlign: 'center'
    };
    return (
      <div style={containerStyle}>

          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Create</StepLabel>
            </Step>
            <Step>
              <StepLabel>Invite</StepLabel>
            </Step>
            <Step>
              <StepLabel>Finish</StepLabel>
            </Step>
          </Stepper>

          <div style={contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  Done.
                </a> Your team is ready for war!
              </p>
            ) : (
              <div>
                {this.getStepContent(stepIndex)}
                <div style={buttonContainerStyle}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    secondary = {true}
                    style={{marginRight: 12}}
                  />
                  {stepIndex === 2 ? <RaisedButton
                    label='Finish'
                    primary={true}
                    onTouchTap={this.handleFinished}
                  /> : <RaisedButton
                    label='Next'
                    primary={true}
                    onTouchTap={this.handleNext}
                  />}

                </div>
              </div>
            )}
          </div>
        </div>
    );
  }
}
