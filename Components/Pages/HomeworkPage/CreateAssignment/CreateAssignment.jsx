import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./CreateAssignment.css";
import $ from "jquery";
class createAssignment extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Title: "",
			Instructions:"",
			Due:"",
			Resources:"",
			sectionTitle: "",
			Type: ""
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.InstructionsChange = this.InstructionsChange.bind(this);
		this.DueChange = this.DueChange.bind(this);
		this.ResourcesChange = this.ResourcesChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.assignmentCreate = this.assignmentCreate.bind(this);
		this.sectionChange = this.sectionChange.bind(this);
		this.typeChange = this.typeChange.bind(this);
	}

	handleTitleChange(event) {
		this.setState({ Title: event.target.value });
	}

	InstructionsChange(event) {
		this.setState({ Instructions: event.target.value });
	}

	DueChange(event) {
		this.setState({ Due: event.target.value });
	}

	ResourcesChange(event) {
		this.setState({ Resources: event.target.value });
	}
	sectionChange(event) {
		this.setState({ sectionTitle: event.target.value });
	}
	typeChange(event) {
		this.setState({ Type: event.target.value });
	}


	clearInput(){
		this.setState({
			Title: "",
			Instructions: "",
			Due: "",
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
				Due: this.state.Due,
				Resources: this.state.Resources,
				sectionTitle: this.state.sectionTitle,
				Type: this.state.Type
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
				<div className="homeworkAssignDiv">
					<form onSubmit={this.assignmentCreate}>
						<FormGroup controlId="formBasicText">
							<div className="row"> 
								<div className="row remove-all-margin-padding">
									<div className="col-md-4">
										<FormControl
					      					type="text" 
					      					value={this.state.Title}
					      					placeholder="Title" 
					      					onChange={this.handleTitleChange}
					      				/>
				      				</div>

									<div className="col-md-4">
										<FormControl
					      					type="text" 
					      					value={this.state.Instructions}
					      					placeholder="Instructions" 
					      					onChange={this.InstructionsChange}
					      				/>
				      				</div>

									<div className="col-md-4">
										<FormControl
					      					type="text" 
					      					value={this.state.Due}
					      					placeholder="Due Date" 
					      					onChange={this.DueChange}
					      				/>
				      				</div>
				      			</div>
				      			<div className="row remove-all-margin-padding">
									<div className="col-md-4">
										<FormControl
											type="text" 
					      					value={this.state.Resources}
					      					placeholder="Resources" 
					      					onChange={this.ResourcesChange}
										/>
									</div>

									<div className="col-md-4">
										<FormControl
											componentClass="select"
											onChange={this.sectionChange}
											placeholder="select"
										>
											<option value="">Select Section</option>
											{this.props.sectionList.map((item, index) =>
												<option key= {index} value={item.Title}>{item.Title}</option>

											)}
										</FormControl>
									</div>

									<div className="col-md-4">
										<FormControl
											componentClass="select"
											onChange={this.typeChange}
											placeholder="select"
										>
											<option value="">Assignment Type</option>
											<option value="Homework">Homework</option>
											<option value="Project">Project</option>
											<option value="Career">Career</option>
										</FormControl>
									</div>
								</div>
							</div>
							<div className="row remove-all-margin-padding">
								<div className="col-md-8">
								</div>
								<div className="col-md-4">
							    	<Button id="homeworkButton"type="submit">Submit</Button>
							    </div>
						    </div>
						</FormGroup>
					</form>
				</div>
			</div>
		);
	}
}
export default createAssignment;