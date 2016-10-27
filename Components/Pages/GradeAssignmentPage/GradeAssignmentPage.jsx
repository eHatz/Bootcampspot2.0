import React, { Component } from "react";
import "./GradeAssignmentPage.css";
import TableRow from '../../Table/TableRow/TableRow.jsx'
import $ from "jquery";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
		
class GradeAssignmentPage extends Component {
	constructor(props, context) {

		super(props, context);
		this.state = {
			assignment: null,
			submission: null,
			userInfo: null,
			student: null,
			notes: null,
			grade: null
		};
		this.getHwSubmission = this.getHwSubmission.bind(this);
		this.gradeAssignment = this.gradeAssignment.bind(this);
		this.handleNotesChange = this.handleNotesChange.bind(this);
		this.handleGradeChange = this.handleGradeChange.bind(this);
		this.clearInput = this.clearInput.bind(this);

	}
	componentWillMount() {
		const { UserInfo, UserSection} = this.props;
		this.setState({userInfo: UserInfo.UserInfo})
		if (UserInfo.UserInfo.Role === undefined) {
			$.ajax({
				url: '/login',
				type: "GET"
			}).then((response) => {
				this.setState({userInfo: response.userData})
				console.log('user data', response.userData)
				this.getHwSubmission(response.userData);
			});
		} else {
			this.getHwSubmission(this.props.UserInfo.UserInfo);
		}
	}

	handleNotesChange(event) {
		this.setState({ notes: event.target.value });
	}

	handleGradeChange(event) {
		this.setState({ grade: event.target.value });
	}

	getHwSubmission(UserInfo) {
		const { params } = this.props;
		if (UserInfo.Role === 'Admin' || UserInfo.Role === 'Teacher') {
			$.ajax({
				url: '/gradeSubmitView',
				type: "POST",
				data: {
					UserId: UserInfo.id,
					assignmentId: params.assignId,
					studentId: params.userId
		        }
			}).then((response) => {
				this.setState({
					submission: response.studentSubmission[0],
					student: response.student,
					assignment: response.assignment
				});
			});
		};
	}

	clearInput(){
		this.setState({
			notes: ''
		});
	}

	gradeAssignment(event) {
		const { UserInfo, params } = this.props;
		if (UserInfo.UserInfo.Role === 'Admin' || UserInfo.UserInfo.Role === 'Teacher') {
			$.ajax({
				url: '/gradeAssignment',
				type: "POST",
				data: {
					graderName: UserInfo.UserInfo.FirstName + ' ' + UserInfo.UserInfo.LastName,
					grade: this.state.grade,
					assignmentName: this.state.assignment.Title,
					assignmentId: this.state.assignment.id,
					studentName: this.state.student.FirstName + ' ' + this.state.student.LastName,
					submissionId: this.state.submission.id,
					notes: this.state.notes
		        }
			}).then((response) => {
				this.setState({submission: response.updatedSub});
			});
		};
		this.clearInput();
	    event.preventDefault();
	}
		
	render() {
		const { UserInfo, UserSection, params } = this.props;
		console.log('studentInfo', this.state.student);
		console.log('submission', this.state.assignment);
		return (

			<div className="homeworkBackground">
				{this.state.userInfo && this.state.submission ? (

					<div id='gradeAssignmentDiv'>
						<h1 className="assignGrade">{this.state.student.FirstName + ' ' + this.state.student.LastName}</h1>
						 {this.state.submission.Grade ? (
							<h1 className="assignGrade">Grade: {this.state.submission.Grade}</h1>
						):(
							<h1 className="assignGrade">Not Graded</h1>
						)}
						<a href={this.state.submission.Submission}>View Student Submission</a>
						<form onSubmit={this.gradeAssignment}>
							<FormGroup controlId="formGrade">

								<ControlLabel>Notes</ControlLabel>
								<FormControl
			      					type="text" 
			      					value={this.state.notes}
			      					placeholder="Notes" 
			      					onChange={this.handleNotesChange}
			      				/>

				      			<FormControl
									componentClass="select"
									onChange={this.handleGradeChange}
									placeholder="Grade"
								>
									<option value="">Select Grade</option>
									<option value="A+">A+</option>
									<option value="A">A</option>
									<option value="A-">A-</option>
									<option value="B+">B+</option>
									<option value="B">B</option>
									<option value="B-">B-</option>
									<option value="C+">C+</option>
									<option value="C">C</option>
									<option value="C-">C-</option>
									<option value="D+">D+</option>
									<option value="D">D</option>
									<option value="D-">D-</option>
									<option value="F">F</option>
								</FormControl>

							    <Button id="gradeButt"type="submit">Submit</Button>
							</FormGroup>
						
						</form>
					</div>
					): (
						null
					)}
			</div>
		)
	}
}

export default GradeAssignmentPage;