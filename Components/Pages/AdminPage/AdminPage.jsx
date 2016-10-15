import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";
import CreateUserForm from './createUserForm/createUserForm.jsx'

const AdminPage = withRouter(
	class AdminPage extends Component {

		componentWillMount() {
			const { UserInfo, location } = this.props;
			//child components apparently render before application components do on refresh,
			//this if statement feteches the information need for admin to stay on the page
			//RESEARCH LOAD ORDER FOR COMPONENTS/ ASK PELEG
			if (UserInfo.UserInfo.Role === undefined) {
				fetch('/login', {credentials: 'include'})
				.then((response) => response.json())
				.then((json) => {
					console.log('admin page', json)
					if (json.userData.Role !== 'Admin') {
						this.props.router.replace('/#')
					}
				})
			} else {
				if (UserInfo.UserInfo.Role !== 'Admin') {
					console.log('admin page else')
					this.props.router.replace('/#')
				}
			}
			
		}

		render() {
			return (
				<div className="AdminBackground">
			 		<CreateUserForm/>			
				</div>

			)
		}
	}
)

export default AdminPage;