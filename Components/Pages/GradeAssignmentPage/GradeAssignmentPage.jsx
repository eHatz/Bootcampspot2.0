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
			notes: null,
			grade: null
		};
		this.getHwSubmission = this.getHwSubmission.bind(this);
		this.handleNotesChange = this.handleNotesChange.bind(this);
		this.handleGradeChange = this.handleGradeChange.bind(this);

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
			});
		};
		this.getHwSubmission();
	}

	handleNotesChange(event) {
		this.setState({ email: event.target.value });
	}

	handleGradeChange(event) {
		this.setState({ email: event.target.value });
	}

	getHwSubmission() {
		const { UserInfo, params } = this.props;
		if (UserInfo.UserInfo.Role === 'Admin' || UserInfo.UserInfo.Role === 'Teacher') {
			$.ajax({
				url: '/gradeSubmitView',
				type: "POST",
				data: {
					UserInfo: JSON.stringify(UserInfo),
					assignmentId: params.assignId,
					studentId: params.userId
		        }
			}).then((response) => {
				this.setState({submission: response.studentSubmission[0], assignment: response.assignment});
			});
		};
	}

	gradeAssignment() {
		const { UserInfo, params } = this.props;
		if (UserInfo.UserInfo.Role === 'Admin' || UserInfo.UserInfo.Role === 'Teacher') {
			$.ajax({
				url: '/gradeAssignment',
				type: "POST",
				data: {
					UserInfo: JSON.stringify(UserInfo),
					grade: this.state.grade,
					assignmentId: params.assignId,
					studentId: params.userId,
					notes: this.state.notes
		        }
			}).then((response) => {

			});
		};
	}
		
	render() {
		const { UserInfo, UserSection, params } = this.props;
		return (

			<div className="homeworkBackground">
				{this.state.userInfo && this.state.submission ? (

					<div id='gradeAssignmentDiv'>
						<h1>{this.state.submission.FirstName + ' ' + this.state.submission.LastName}</h1>
						 {this.state.submission.Grade ? (
							<h1>Grade: {this.state.submission.Grade}</h1>
						):(
							<h1>Not Graded</h1>
						)}
						<a href={this.state.submission.UserAssignment.Submission}>View Student Submission</a>
						<form onSubmit={this.gradeAssignment}>
							<FormGroup controlId="formBasicText">

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
									placeholder="grade"
								>
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

							    <Button type="submit">Submit</Button>
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