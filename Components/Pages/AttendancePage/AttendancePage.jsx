import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar.jsx";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import "./AttendancePage.css";

class AttendancePage extends Component {

	render() {

		return (

            <div className = "pageWrapper">
            	{/*<LogoutBar UserName='Tim' />*/}
                <div className ="pageHeader">
                	<img src ="/assets/images/logo2.png" />
            	</div>
               	<div className="pageContents attendanceContents" >
                    <Navbar />

                        {/* add all attendance specifc page content here */}
                            <p> THIS IS MY CONTENT </p>
                </div>
            </div>	
		);
	}
}

export default AttendancePage;

