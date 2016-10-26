import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./createUserForm.css";
import $ from "jquery";

class createUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			firstName:"",
			lastName:"",
			role:"",
			sectionTitle: "",
			updated: false
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.firstNameChange = this.firstNameChange.bind(this);
		this.lastNameChange = this.lastNameChange.bind(this);
		this.roleChange = this.roleChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.userCreate = this.userCreate.bind(this);
		this.sectionChange = this.sectionChange.bind(this);
		this.getUser = this.getUser.bind(this);
	}

	componentWillMount() {
<<<<<<< HEAD
=======
		this.getUser();
	}

	getUser() {
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
		if (this.props.UserFormType === 'update') {
			$.ajax({
				url: '/admin/getUser',
				type: "POST",
				data: {
<<<<<<< HEAD
					userId: this.props.params.id
=======
					userId: this.props.userId
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
				}
			}).then((response) =>{
				this.setState({
					email: response.userInfo.Email,
					firstName:response.userInfo.FirstName,
					lastName:response.userInfo.LastName,
					role:response.userInfo.Role,
<<<<<<< HEAD
					sectionTitle: response.userInfo.SectionTitle
=======
					sectionTitle: response.section[0].Title
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
				});
			});
		}
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
		if (this.props.UserFormType === 'create') {
			this.setState({
				email: "",
				firstName: "",
				lastName: "",
			});
		};
	}

	userCreate(event){
		if (this.props.UserFormType === 'create') {
			$.ajax({
				url: '/admin/createUser',
				type: "POST",
				data: {
					email: this.state.email,
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					role: this.state.role,
					sectionTitle: this.state.sectionTitle
				}
			}).then((response) =>{
				this.props.getUsers('sort-nameAsc', 'all');
			});

			this.clearInput();
			event.preventDefault();
		} else if (this.props.UserFormType === 'update') {
			$.ajax({
				url: '/admin/updateUser',
				type: "POST",
				data: {
<<<<<<< HEAD
=======
					userId: this.props.userId,
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
					email: this.state.email,
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					role: this.state.role,
					sectionTitle: this.state.sectionTitle
				}
			}).then((response) =>{
			});

			this.clearInput();
<<<<<<< HEAD
=======
			this.setState({updated: true});
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
			event.preventDefault();
		}
		
	}
	
	render() {
		const roles = ['Admin', 'Teacher', 'Student'];
		return (
			
			<div className="row remove-all-margin-padding">
				<div className="createUser">
					{this.props.UserFormType === 'create' ? (
						<h4 className="formTitle">Create New User</h4>
					): (
						this.state.updated ? (
							<h4 className="formTitle">Updated Successfully</h4>
						) : (
							<h4 className="formTitle">Update User</h4>
						)
						
					)}
					
					<form onSubmit={this.userCreate}>
						<FormGroup controlId="formBasicText">
							
							<div className="col-md-2 colorBlock"> 
								<FormControl
									type="text" 
									value={this.state.email}
									placeholder="Email" 
									onChange={this.handleEmailChange}
									required
								/>
							</div>
							<div className="col-md-2 colorBlock"> 
								<FormControl
									type="text" 
									value={this.state.firstName}
									placeholder="First Name" 
									onChange={this.firstNameChange}
									required
								/>
							</div>
							<div className="col-md-2 colorBlock"> 
								<FormControl
									type="text" 
									value={this.state.lastName}
									placeholder="Last Name" 
									onChange={this.lastNameChange}
									required
								/>
							</div>
							<div className="col-md-2 colorBlock"> 
								<FormControl
									componentClass="select"
									onChange={this.roleChange}
									placeholder="select"
									required
								>
									{this.props.UserFormType === 'update' ? (
										<option value={this.state.role}>{this.state.role}</option>
									):(
										<option value="">Select Role</option>
									)}
									{roles.map((item, index) =>
										this.props.UserFormType === 'update' && item === this.state.role ? (
											null
										):(
											<option key= {index} value={item}>{item}</option>
										)
									)}
									
								</FormControl>
							</div>
							<div className="col-md-2 colorBlock"> 
								<FormControl
									componentClass="select"
									onChange={this.sectionChange}
									placeholder="select"
									required   
								>
									{this.props.UserFormType === 'update' ? (
<<<<<<< HEAD
										<option value="this.props.sectionTitle">{this.props.sectionTitle}</option>
=======
										<option value={this.state.sectionTitle}>{this.state.sectionTitle}</option>
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
									):(
										<option value="">Select Section</option>
									)}
									{this.props.sectionList.map((item, index) =>
<<<<<<< HEAD
										this.props.UserFormType === 'update' && item.Title === this.props.sectionTitle ? (
=======
										this.props.UserFormType === 'update' && item.Title === this.state.sectionTitle ? (
>>>>>>> 71d0e6f9281558d48ba758fa3579d223b949cbc2
											null
										):(
											<option key= {index} value={item.Title}>{item.Title}</option>
										)
									)}
								</FormControl>
							</div>
							<div className="col-md-2"> 
								<Button id="adminButton" type="submit">Submit</Button>
							</div>
						</FormGroup>
					</form>
				</div>
			</div>
		);
	}
}
export default createUserForm;