import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar.jsx";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import "./AttendancePage.css";

class AttendancePage extends Component {

	render() {

		return (
			
			<div>
					
				<LogoutBar UserName='Tim' />

				<div className="row">
					<div className="linkDiv">
						<Navbar />
					</div>
				</div>
			</div>
	
		);
	}
}

export default AttendancePage;

