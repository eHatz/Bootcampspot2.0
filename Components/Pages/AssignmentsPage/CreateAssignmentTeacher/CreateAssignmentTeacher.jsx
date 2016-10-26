import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./CreateAssignmentTeacher.css";
import $ from "jquery";
		
class createAssignmentTeacher extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Title: "",
			Instructions:"",
			DueDate:"",
			DueTime:"",
			Resources:"",
			sectionTitle: this.props.UserSection.Title
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.InstructionsChange = this.InstructionsChange.bind(this);
		this.DueDateChange = this.DueDateChange.bind(this);
		this.DueTimeChange = this.DueTimeChange.bind(this);
		this.ResourcesChange = this.ResourcesChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.assignmentCreate = this.assignmentCreate.bind(this);
	}

	handleTitleChange(event) {
		this.setState({ Title: event.target.value });
	}

	InstructionsChange(event) {
		this.setState({ Instructions: event.target.value });
	}

	DueDateChange(event) {
		this.setState({ DueDate: event.target.value });
	}

	DueTimeChange(event) {
		this.setState({ DueTime: event.target.value });
	}

	ResourcesChange(event) {
		this.setState({ Resources: event.target.value });
	}


	clearInput(){
		this.setState({
			Title: "",
			Instructions: "",
			DueDate: "",
			DueTime: "",
			Resources: ""
		});
	}

	assignmentCreate(event){
		$.ajax({
			url: '/createAssignment',
			type: "POST",
			data: {
	        	Title: this.state.Title,
				Instructions: this.state.Instructions,
				DueDate: this.state.DueDate,
				DueTime: this.state.DueTime,
				Resources: this.state.Resources,
				sectionTitle: this.state.sectionTitle
	        }
		}).then((response) => {
			this.props.getAssignments(this.state.sectionTitle);
		});

	    this.clearInput();
	    event.preventDefault();
	}
	
	render() {

		return (
			<div className="row remove-all-margin-padding">
				<div id='assignmentTeacherDiv'>
					<form onSubmit={this.assignmentCreate}>
					
						<FormGroup controlId="formBasicText">
							<div className="col-md-2 assignTeachRemovePad">
								<FormControl
			      					type="text" 
			      					value={this.state.Title}
			      					placeholder="Title" 
			      					onChange={this.handleTitleChange}
			      					required
			      				/>
		      				</div>

							<div className="col-md-2 assignTeachRemovePad">
								<FormControl
			      					type="text" 
			      					value={this.state.Instructions}
			      					placeholder="Instructions" 
			      					onChange={this.InstructionsChange}
			      					required
			      				/>
		      				</div>

							<div className="col-md-2 assignTeachRemovePad">
								<FormControl
			      					type="date" 
			      					value={this.state.DueDate}
			      					placeholder="Due Date" 
			      					onChange={this.DueDateChange}
			      					required
			      				/>
		      				</div>
		      		
							<div className="col-md-2 assignTeachRemovePad">
								<FormControl
			      					type="time" 
			      					value={this.state.DueTime}
			      					placeholder="Due Time" 
			      					onChange={this.DueTimeChange}
			      					required
			      				/>
		      				</div>
				
							<div className="col-md-2 assignTeachRemovePad">
								<FormControl
									type="text" 
			      					value={this.state.Resources}
			      					placeholder="Resources" 
			      					onChange={this.ResourcesChange}
								/>
							</div>

						    <div className="col-md-2 assignTeachRemovePad">
						    	<Button id="createAssignmentButt" type="submit">Submit</Button>
					    	</div>
						</FormGroup>
					</form>
				</div>
			</div>
		);
	}
}
export default createAssignmentTeacher;