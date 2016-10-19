import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./createUserForm.css";

class createUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			firstName:"",
			lastName:"",
			role:"",
			sectionTitle: ""
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.firstNameChange = this.firstNameChange.bind(this);
		this.lastNameChange = this.lastNameChange.bind(this);
		this.roleChange = this.roleChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.userCreate = this.userCreate.bind(this);
		this.sectionChange = this.sectionChange.bind(this);
	}

	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	firstNameChange(event) {
		this.setState({ firstName: event.target.value });
	}

	lastNameChange(event) {
		this.setState({ lastName: event.target.value });
	}

	roleChange(event) {
		this.setState({ role: event.target.value });
	}
	sectionChange(event) {
		this.setState({ sectionTitle: event.target.value });
	}


	clearInput(){
		this.setState({
			email: "",
			firstName: "",
			lastName: "",
			role: ""
		});
	}

	userCreate(event){
		fetch('/admin/createUser', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
	        	email: this.state.email,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				role: this.state.role,
				sectionTitle: this.state.sectionTitle
	        })
		});
		this.props.getUsers('sort-nameAsc', 'all')
	    this.clearInput();
	    event.preventDefault();
	}
	
	render() {

		return (
			
			<div className="row remove-all-margin-padding createUser">
				<h4 className="formTitle">Create New User</h4>
				<form onSubmit={this.userCreate}>
					<FormGroup controlId="formBasicText">
						
						<div className="col-md-2 colorBlock"> 
							<FormControl
		      					type="text" 
		      					value={this.state.email}
		      					placeholder="Email" 
		      					onChange={this.handleEmailChange}
		      				/>
						</div>
						<div className="col-md-2 colorBlock"> 
							<FormControl
		      					type="text" 
		      					value={this.state.firstName}
		      					placeholder="First Name" 
		      					onChange={this.firstNameChange}
		      				/>
	      				</div>
						<div className="col-md-2 colorBlock"> 
							<FormControl
		      					type="text" 
		      					value={this.state.lastName}
		      					placeholder="Last Name" 
		      					onChange={this.lastNameChange}
		      				/>
						</div>
						<div className="col-md-2 colorBlock"> 
							<FormControl
								componentClass="select"
								onChange={this.roleChange}
								placeholder="select"
							>
								<option value="">Select Role</option>
								<option value='Student'>Student</option>
								<option value='Teacher'>Teacher</option>
								<option value='Admin'>Administrator</option>
							</FormControl>
						</div>
						<div className="col-md-2 colorBlock"> 
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
					    <div className="col-md-2"> 
					    	<Button id="adminButton" type="submit">Submit</Button>
					    </div>
					</FormGroup>
				</form>
			</div>
		);
	}
}
export default createUserForm;