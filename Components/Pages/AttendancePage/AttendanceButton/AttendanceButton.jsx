import React, { Component } from "react";
import { Button } from "react-bootstrap";

const { handleClick } = this.props;

class AttendanceButton extends Component {

	
	componentWillMount() {
		console.log("AttendanceMenu");
		//Request class list from server

	}

	render() {

		return (
			<div className="well" style={wellStyles}>
				<Button onClick={handleClick} bsSize="large" block>Mark Present</Button>
			</div>
		)
	}

}

export default AttendanceButton;