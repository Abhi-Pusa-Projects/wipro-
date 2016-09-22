import React,{Component} from 'react';


import RegistrationComponent from './RegText';
import LoginComponent from './Login';


 const style1={
 	padding:'1%',
 	marginLeft:'5%',
 	marginTop:"8%",
 	float:'left'

 }

  const style2={
   	marginLeft:'10%',
   	marginTop:"10%",
 	float:'left'
 }

 const styleVerticalBreak ={
 	marginTop:"8%",
 	marginLeft:"5%",
 	width:'2px',
 	float:'left',
 	borderLeft:'medium #E0E0E0 solid',
 	height:'400px'
 }

export default class LoginReg extends React.Component {
	render(){
		return(

			<div>
				<div className="col-sm-4 col-xs-12 col-lg-3 col-md-3" style={style2}>
				<RegistrationComponent />
				</div>

				<div  className="col-sm-0 col-xs-0" style={styleVerticalBreak} />

				<div className="col-sm-4 col-xs-12 col-lg-3 col-md-3" style={style1}>
				 <LoginComponent />
				</div>
			</div>

			);
	}
	}
