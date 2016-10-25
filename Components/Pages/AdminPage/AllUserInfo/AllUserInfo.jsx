import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./AllUserInfo.css";
import $ from "jquery";
import CreateUserForm from '../createUserForm/createUserForm.jsx';
class AllUserInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			firstName:"",
			lastName:"",
			role:"",
			sectionTitle: ""
		};
		this.getSections = this.getSections.bind(this);
	}

	componentWillMount() {
		
	}

	getSections() {
		$.ajax({
			url: '/admin/getSections',
			type: "POST"
		}).then((response) => {
			this.setState({sectionList: response.section});
		});
	}


	render() {

		return (
			
			<div>
				<CreateUserForm
					sectionList = {this.state.sectionList}
					UserFormType = 'update'
				/>
			</div>
		);
	}
}
export default AllUserInfo;