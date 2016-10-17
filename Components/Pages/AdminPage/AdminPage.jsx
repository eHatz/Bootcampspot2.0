import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";
import CreateUserForm from './createUserForm/createUserForm.jsx';
import TableRow from "../../Table/TableRow/TableRow.jsx";

var dummyData= [
	{
		week: 1,
		homework: 'Homework1',
		dueDate: '1/2/2016',
		submission: '1/1/2016'
	},
	{
		week: 2,
		homework: 'Homework2',
		dueDate: '1/2/2016',
		submission: '1/1/2016'
	},
	{
		week: 3,
		homework: 'Homework3',
		dueDate: '1/2/2016',
		submission: '1/1/2016'
	}
];


const AdminPage = withRouter(
	class AdminPage extends Component {
		constructor(props, context) {

			super(props, context);
			this.state = {

				studentTab: 'active',
				sectionTab: 'inactive',
				userList: []
			};
			this.studentTabClick = this.studentTabClick.bind(this);
			this.sectionTabClick = this.sectionTabClick.bind(this);
		}
		componentWillMount() {
			const { UserInfo, location } = this.props;
			//child components apparently render before application components do on refresh,
			//this if statement feteches the information need for admin to stay on the page
			//RESEARCH LOAD ORDER FOR COMPONENTS/ ASK PELEG
			if (UserInfo.UserInfo.Role === undefined) {
				fetch('/login', {credentials: 'include'})
				.then((response) => response.json())
				.then((json) => {
					if (json.userData.Role !== 'Admin') {
						this.props.router.replace('/#')
					}
				})
			} else {
				if (UserInfo.UserInfo.Role !== 'Admin') {
					this.props.router.replace('/#')
				}
			};

			fetch('/admin/getUsers', {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then((response) => response.json())
			.then((json) => {
				this.setState({userList: json})
			});
			
		}
		studentTabClick(event) {
			this.setState({ 
				studentTab: 'active',
				sectionTab:'inactive'
			});
		}
		sectionTabClick(event) {
			this.setState({ 
				studentTab: 'inactive',
				sectionTab:'active'
			});
		}

		render() {
			return (
				<div className="AdminBackground">
					<div>
						<ul className="nav nav-pills">
							<li onClick={this.studentTabClick} className={this.state.studentTab}><a data-toggle="pill" href="#/admin">Add User</a></li>
							<li onClick={this.sectionTabClick} className={this.state.sectionTab}><a data-toggle="pill" href="#/admin">Add Class Section</a></li>
						</ul>

						<div className="tab-content">
							<div id="addStudentTab" className={"tab-pane fade in " + this.state.studentTab}>
								<CreateUserForm/>
								<div className='wholeTable'>
									<TableRow 
										columnCount ={[
											{type: 'Header', value: 'NAME'},
											{type: 'Header', value: 'SECTION'},
											{type: 'Header', value: 'EMAIL'},
											{type: 'Header', value: 'ROLE'},
											{type: 'Header', value: 'EDIT/DELETE'}
										]}
										pageName = 'adminPage'
									/>

									{this.state.userList.map((item, index) =>
										<TableRow
											columnCount ={[
												{type: 'Data', value: item.FirstName + ' ' + item.LastName},
												{type: 'Data', value: ''},
												{type: 'Data', value: item.Email},
												{type: 'Data', value: item.Role},
												{type: 'Button', value: ''},
											]}
											pageName = 'adminPage'
											key= {index}
										/>
									)}
								</div>
							</div>
							<div id="addSectionTab" className={"tab-pane fade in " + this.state.sectionTab}>
								<p>Some content in section tab.</p>
							</div>
						</div>
					</div>		
				</div>

			)
		}
	}
)

export default AdminPage;