import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";
import CreateUserForm from './createUserForm/createUserForm.jsx';
import TableRow from "../../Table/TableRow/TableRow.jsx";
import SortUsersForm from './SortUsersForm/SortUsersForm.jsx';
import CreateSectionForm from './CreateSectionForm/CreateSectionForm.jsx';

const AdminPage = withRouter(
	class AdminPage extends Component {
		constructor(props, context) {

			super(props, context);
			this.state = {
				AdminUserTab: 'active',
				AdminSectionTab: 'inactive',
				userList: [],
				sectionList: []
			};
			this.userTabClick = this.userTabClick.bind(this);
			this.AdminSectionTabClick = this.AdminSectionTabClick.bind(this);
			this.getUsers = this.getUsers.bind(this);
			this.getSections = this.getSections.bind(this);
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
			//WARNINGS COMING FROM THESE 2 LINES OF CODE!!!!!
			this.getUsers('sort-nameAsc', 'all');
			this.getSections();
		}
		//lists all users
		getUsers(sort, section) {
			fetch('/admin/getUsers', {
				credentials: 'include',
				method: 'POST',
				headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				},
				body: JSON.stringify({
		        	sort: sort,
					section: section
		        })
			})
			.then((response) => response.json())
			.then((json) => {
				this.setState({userList: json});
			});
			console.log('RUNNING GET USERS');
		}

		getSections() {
			fetch('/admin/getSections', {
				credentials: 'include',
				method: 'POST',
				headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				}
			})
			.then((response) => response.json())
			.then((json) => {
				this.setState({sectionList: json});
			});
		}
		//activates/shows user tab
		userTabClick(event) {
			this.setState({ 
				AdminUserTab: 'active',
				AdminSectionTab:'inactive'
			});
		}
		//activates/shows section tab
		AdminSectionTabClick(event) {
			this.setState({ 
				AdminUserTab: 'inactive',
				AdminSectionTab:'active'
			});
		}

		render() {
			return (
				<div className="AdminBackground">
					<div>
						<ul className="nav nav-pills">
							<li onClick={this.userTabClick} className={this.state.AdminUserTab}><a data-toggle="pill" href="#/admin">Add User</a></li>
							<li onClick={this.AdminSectionTabClick} className={this.state.AdminSectionTab}><a data-toggle="pill" href="#/admin">Add Class Section</a></li>
						</ul>

						<div className="tab-content">
							<div id="addAdminUserTab" className={"tab-pane fade in " + this.state.AdminUserTab}>
								<CreateUserForm
									getUsers = {this.getUsers}
									sectionList = {this.state.sectionList}
								/>
								<SortUsersForm
									getUsers = {this.getUsers}
									sectionList = {this.state.sectionList}
								/>
								<div className='wholeTable'>
									<TableRow 
										columnCount ={[
											{type: 'Header', value: 'NAME'},
											{type: 'Header', value: 'EMAIL'},
											{type: 'Header', value: 'ROLE'},
											{type: 'Header', value: 'EDIT'},
											{type: 'Header', value: 'DELETE'}
										]}
										pageName = 'adminUserPage'
									/>

									{this.state.userList.map((item, index) =>
										<TableRow
											columnCount ={[
												{type: 'Data', value: item.FirstName + ' ' + item.LastName},
												{type: 'Data', value: item.Email},
												{type: 'Data', value: item.Role},
												{type: 'Button', value: ''},
												{type: 'Button', value: ''}
											]}
											pageName = 'adminUserPage'
											rowLink = {'User/' + item.id}
											key= {index}
										/>
									)}
								</div>
							</div>
							<div id="addAdminSectionTab" className={"tab-pane fade in " + this.state.AdminSectionTab}>
								<CreateSectionForm
									getSections = {this.getSections}
								/>
								<div className='wholeTable'>
									<TableRow 
										columnCount ={[
											{type: 'Header', value: 'TITLE'},
											{type: 'Header', value: 'LOCATION'},
											{type: 'Header', value: 'SLACK KEYS'},
											{type: 'Header', value: 'START DATE-END DATE'},
											{type: 'Header', value: 'EDIT'},
											{type: 'Header', value: 'DELETE'}
										]}
										pageName = 'adminSectionPage'
									/>

									{this.state.sectionList.map((item, index) =>
										<TableRow
											columnCount ={[
												{type: 'Data', value: item.Title},
												{type: 'Data', value: item.Location},
												{type: 'Data', value: item.Slack},
												{type: 'Data', value: item.StartDate + ' - ' + item.EndDate},
												{type: 'Button', value: ''},
												{type: 'Button', value: ''}
											]}
											pageName = 'adminSectionPage'
											key= {index}
										/>
									)}
								</div>
							</div>
						</div>
					</div>		
				</div>
			)
		}
	}
)

export default AdminPage;