import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class AttendanceEditForm extends Component {



	attendanceEditHandler(event){
		event.currentTarget.getAttribute('id')
	}



	render(){

		const { text } = this.props;



		return (
			<div className="AttendanceEditForm_overflow">
				<ButtonToolbar>
					<DropdownButton title={text} id="dropdown-size-medium">

						<MenuItem eventKey="1">Set to "Early"</MenuItem>
						<MenuItem eventKey="2">Set to "Late"</MenuItem>
						<MenuItem eventKey="3">Set to "Absent"</MenuItem>

					</DropdownButton>
				</ButtonToolbar>
			</div>
		);
	}

}

export default AttendanceEditForm;