import React, { PropTypes } from 'react'
import Profile from './Profile';
var Loading = require('./Loading');
const axios = require('axios');
export default class VerifyEmail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      email:""
    }
  }

componentDidMount() {
  let token = this.props.params.token;
  axios.get(`iverify/${token}`)
    .then((response) => {
      if (response.data.email !== undefined) {
        this.setState({
          isLoading:false,
          email:response.data.email
        });
        localStorage.token = response.data.token;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("mounted");
}
  render () {
    return this.state.isLoading ? <Loading text = "verifying Email address" /> : <Profile email = {this.state.email} />
  }
}
