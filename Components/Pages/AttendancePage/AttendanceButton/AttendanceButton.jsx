import React, { Component } from "react";
import { Button } from "react-bootstrap";

class AttendanceButton extends Component {

	
	componentWillMount() {
		console.log("AttendanceMenu");
		//Request class list from server

	}

	render() {
		
		const { handleClick } = this.props;

		return (
			<div className="well" style={wellStyles}>
				<Button onClick={handleClick} bsSize="large" block>Mark Present</Button>
			</div>
		)
	}

}

export default AttendanceButton;