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
			role:""
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.firstNameChange = this.firstNameChange.bind(this);
		this.lastNameChange = this.lastNameChange.bind(this);
		this.roleChange = this.roleChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.messageSubmit = this.messageSubmit.bind(this);
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
		console.log('running role change', event.target.value);
		this.setState({ role: event.target.value });
	}


	clearInput(){
		this.setState({
			email: "",
			firstName: "",
			lastName: "",
			role: ""
		});
	}

	messageSubmit(event){
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
				role: this.state.role
	        })
		})
	    
	    this.clearInput();
	    event.preventDefault();
	}
	
	render() {

		return (
			<div id='userFormDiv'>
				<form onSubmit={this.messageSubmit}>
					<FormGroup controlId="formBasicText">

						<ControlLabel>Email</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.email}
	      					placeholder="Email" 
	      					onChange={this.handleEmailChange}
	      				/>

						<ControlLabel>First Name</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.firstName}
	      					placeholder="First Name" 
	      					onChange={this.firstNameChange}
	      				/>

						<ControlLabel>Last Name</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.lastName}
	      					placeholder="Last Name" 
	      					onChange={this.lastNameChange}
	      				/>
						<ControlLabel>Role</ControlLabel>
						<FormControl
							componentClass="select"
							onChange={this.roleChange}
							placeholder="select"
						>
							<option value="">select</option>
							<option value='Student'>Student</option>
							<option value='Teacher'>Teacher</option>
							<option value='Admin'>Administrator</option>
						</FormControl>

					    <Button type="submit">Submit</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}
export default createUserForm;