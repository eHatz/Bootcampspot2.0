import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";
import CreateUserForm from './createUserForm/createUserForm.jsx';
import TableRow from "../../Table/TableRow/TableRow.jsx";


const AdminPage = withRouter(
	class AdminPage extends Component {
		constructor(props, context) {

			super(props, context);
			this.state = {

				studentTab: 'active',
				sectionTab: 'inactive',
				userList: []
			};
			this.userTabClick = this.userTabClick.bind(this);
			this.sectionTabClick = this.sectionTabClick.bind(this);
			this.getUsers = this.getUsers.bind(this);
		}
		componentWillMount() {
			const { UserInfo, location, router } = this.props;

			if (UserInfo.UserInfo.Role === undefined) {
				fetch('/login', {credentials: 'include'})
				.then((response) => response.json())
				.then((json) => {
					if (json.userData.Role !== 'Admin') {
						router.replace('/#');
					};
				})
			} else {
				if (UserInfo.UserInfo.Role !== 'Admin') {
					router.replace('/#');
				};
			};
			this.getUsers();
			
		}
		//lists all users
		getUsers() {
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
				this.setState({userList: json});
			});
		}
		//activates/shows user tab
		userTabClick(event) {
			this.setState({ 
				studentTab: 'active',
				sectionTab:'inactive'
			});
		}
		//activates/shows section tab
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
							<li onClick={this.userTabClick} className={this.state.studentTab}><a data-toggle="pill" href="#/admin">Add User</a></li>
							<li onClick={this.sectionTabClick} className={this.state.sectionTab}><a data-toggle="pill" href="#/admin">Add Class Section</a></li>
						</ul>

						<div className="tab-content">
							<div id="addStudentTab" className={"tab-pane fade in " + this.state.studentTab}>
								<CreateUserForm
									getUsers = {this.getUsers}
								/>
								<div className='wholeTable'>
									<TableRow 
										columnCount ={[
											{type: 'Header', value: 'NAME'},
											{type: 'Header', value: 'SECTION'},
											{type: 'Header', value: 'EMAIL'},
											{type: 'Header', value: 'ROLE'},
											{type: 'Header', value: 'EDIT'},
											{type: 'Header', value: 'DELETE'}
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
												{type: 'Button', value: ''}
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