import React, { Component } from "react";
import { Popover, Tooltip, Button, Modal, OverlayTrigger, FormGroup, FormControl } from 'react-bootstrap';
// import "./AttendanceModal.css";

class AttendanceModal extends Component {

	constructor(props){
		super(props);

		this.state = {
			attendanceStatus: ""
		}

		this.handleAttendanceChange = this.handleAttendanceChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleAttendanceChange(event){
		this.setState({attendanceStatus: event.target.value})
	}

	handleSubmit(){
		this.props.markAttendance(this.props.id, this.state.attendanceStatus)
	}

	render() {

		const { date, student, show, hideModal } = this.props;

		return (

			<Modal show={show} onHide={hideModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<h2>Mark attendance for {studentName} on {date} :</h2>

					<FormGroup>
						<FormControl 
							componentClass="select" 
							placeholder="select"
							onChange={this.handleAttendanceChange}
						>
								<option value="Early">Early</option>
								<option value="Late">Late</option>
								<option value="Absent">Absent</option>

						</FormControl>
					</FormGroup>

				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.handleSubmit}>Submit</Button>
				</Modal.Footer>

			</Modal>
		);
	}
};

export default AttendanceModal;