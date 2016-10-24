import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./AttendanceButton.css"

class AttendanceButton extends Component {

	
	componentWillMount() {
		console.log("AttendanceMenu");
		//Request class list from server

	}

	render() {
		
		const { attendanceButtonOnClick } = this.props;

		return (
			<div className="well">
				<Button className="presentButt" onClick={attendanceButtonOnClick} bsSize="large" block>Mark Present</Button>
			</div>
		)
	}

}

export default AttendanceButton;