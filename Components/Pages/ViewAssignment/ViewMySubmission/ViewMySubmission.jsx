import React, { Component } from "react";
import "./ViewMySubmission.css";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import $ from "jquery";

class ViewMySubmission extends Component {
	constructor(props) {
		super(props);

		this.state = {
			assignmentLinks: ""
		};

		this.submitAssignment = this.submitAssignment.bind(this);
		this.assignmentChange = this.assignmentChange.bind(this);
	}

	assignmentChange(event) {
		this.setState({ assignmentLinks: event.target.value });
	}

	submitAssignment(event){
		$.ajax({
			url: '/submitAssignment',
			type: "POST",
			data: {
	        	assignmentLinks: this.state.assignmentLinks,
	        	userInfo: this.props.UserInfo,
	        	assignmentId: this.props.assignmentId
	        }
		}).then((response) => {
			
		});

	    event.preventDefault();
	}
		
	render() {
		const { assignment, submission, UserInfo, UserSection } = this.props;
		return (

			<div>
				{submission.length === 0 ? (
					<div className="row remove-all-margin-padding">
						<div className='assignmentForm'>
							<h4 className="formTitle">Submit Assignment</h4>
							<a href={assignment.Instructions}>Instructions</a>

							<form onSubmit={this.submitAssignment}>
								<FormGroup controlId="formBasicText">
									
									<div className="col-md-6 colorBlock"> 
										<FormControl
					      					type="text" 
					      					value={this.state.assignmentLinks}
					      					placeholder="Assignment Links" 
					      					onChange={this.assignmentChange}
					      				/>
									</div>
								    <div className="col-md-2"> 
								    	<Button type="submit">Submit</Button>
								    </div>
								</FormGroup>
							</form>
						</div>
					</div>
				) : (
					<div className="row remove-all-margin-padding">
						<h1>Assignment has already been submitted.</h1>
						<a href={assignment.Instructions}>Instructions</a>
						{assignment.Due > submission[0].UserAssignment.updatedAt ? (
							<h1>Early</h1>
						) : (
							<h1>Late</h1>
						)}

						{submission[0].UserAssignment.Grade ? (
							<h1>Grade: {submission[0].UserAssignment.Grade}</h1>
						) : (
							<h1>Not Graded</h1>
						)}

						<button>Edit Submission</button>

					</div>
				)}
			</div>
		);
	}
}

export default ViewMySubmission;