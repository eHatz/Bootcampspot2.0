import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./AttendanceButton.css"

class AttendanceButton extends Component {
	//Receives props: attendanceButtonOnClick, buttonId
	

	render() {
		
		const { attendanceButtonOnClick, buttonId } = this.props;

		return (
			<div className="well AttendanceButton_well">

				<Button className="AttendanceButton_button" onClick={attendanceButtonOnClick} value={buttonId} bsSize="large" block>Mark Present</Button>

			</div>
		)
	}

}

export default AttendanceButton;