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

	messageSubmit(){
		// $.ajax({
	 //        url: "/admin/createUser",
	 //        type: "POST",
	 //        data:{
	 //        	email: this.state.email,
		// 		firstName: this.state.firstName,
		// 		lastName: this.state.lastName,
		// 		role: this.state.role
	 //        }
	 //    }).done(function(response){
	 //        console.log("response: " + response);
	 //    });
	    
	    this.clearInput();
	    return false;
	}
	handleForm(event) {
		event.preventDefault();
	}
	componentWillMount() {
		console.log('running form')
	}
	render() {

		return (
			<div id='userFormDiv'>
			<h1>why the fuck isnt this running</h1>
				<form onSubmit={this.messageSubmit}>
					<FormGroup controlId="formBasicText">

						<ControlLabel>Email</ControlLabel>
						<FormControl
	      					componentClass="text" 
	      					value={this.state.email}
	      					placeholder="Email" 
	      					onChange={this.handleEmailChange}
	      				/>

						<ControlLabel>First Name</ControlLabel>
						<FormControl
	      					componentClass="text" 
	      					value={this.state.firstName}
	      					placeholder="Email" 
	      					onChange={this.firstNameChange}
	      				/>

						<ControlLabel>Last Name</ControlLabel>
						<FormControl
	      					componentClass="text" 
	      					value={this.state.lastName}
	      					placeholder="Email" 
	      					onChange={this.lastNameChange}
	      				/>

	      				<ControlLabel>Role</ControlLabel>
						<FormControl
	      					componentClass="text" 
	      					value={this.state.role}
	      					placeholder="Email" 
	      					onChange={this.roleChange}
	      				/>
					    <Button type="submit">Submit</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}
export default createUserForm;
