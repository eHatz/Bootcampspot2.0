import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class AttendanceEditForm extends Component {
	//Recieves props: text, attendanceId, markAttendance

	// constructor(props){
	// 	super(props);

	// 	attendanceEditHandler = this.attendanceEditHandler.bind(this);
	// }

	attendanceEditHandler(eventKey, event){
		const { attendanceId, markAttendance } = this.props;
		markAttendance(attendanceId, eventKey);
	}


	render(){

		const { text } = this.props;
		const attendanceEditHandler = this.attendanceEditHandler.bind(this);

		return (
			<div>
				<ButtonToolbar className="AttendanceEditForm_overflow">
					<DropdownButton title={text} id="dropdown-size-medium" pullRight>

						<MenuItem eventKey="Early" onSelect={attendanceEditHandler}>Set to "Early"</MenuItem>
						<MenuItem eventKey="Late" onSelect={attendanceEditHandler}>Set to "Late"</MenuItem>
						<MenuItem eventKey="Absent" onSelect={attendanceEditHandler}>Set to "Absent"</MenuItem>

					</DropdownButton>
				</ButtonToolbar>
			</div>
		);
	}

}

export default AttendanceEditForm;