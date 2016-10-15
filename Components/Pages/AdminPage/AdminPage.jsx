import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";
import createUserForm from './createUserForm/createUserForm.jsx'
import table from '../../Table/Table.jsx'
const AdminPage = withRouter(
	React.createClass({

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
			
		},

		render() {
			return (
				<div className="AdminBackground">
			 		<div className="row">
			 		<h1>why the fuck isnt this running</h1>
			 			<createUserForm/>
			 			<table
					 		pageName='attendancePage'
							header1='NOTES' 
							header2 = 'TIME' 
							header3='DATE' 
							header4='ATTENDANCE'
			 			/>
			 		</div>				
				</div>

			)
		}
	})
)

export default AdminPage;