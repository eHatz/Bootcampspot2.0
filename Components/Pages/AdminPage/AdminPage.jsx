import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";
import CreateUserForm from './CreateUsrForm/CreateUsrForm.jsx';
import TableRow from "../../Table/TableRow/TableRow.jsx";
import SortUsersForm from './SortUsersForm/SortUsersForm.jsx';
import CreateSectionForm from './CreateSectionForm/CreateSectionForm.jsx';
import $ from "jquery";

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

				$.ajax({
					url: '/login',
					type: "GET"
				})
				.then((response) => {
					if (response.userData.Role !== 'Admin') {
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
			$.ajax({
				url: '/admin/getUsers',
				type: "POST",
				data: {
		        	sort: sort,
					section: section
		        }
			}).then((response) => {
				this.setState({userList: response.users});
			});
		}

		getSections() {
			$.ajax({
				url: '/admin/getSections',
				type: "POST"
			}).then((response) => {
				this.setState({sectionList: response.section});
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
									UserFormType = 'create'
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

										]}
										pageName = 'adminUserPage'
									/>

									{this.state.userList.map((item, index) =>
										<TableRow
											columnCount ={[
												{type: 'Data', value: item.FirstName + ' ' + item.LastName},
												{type: 'Data', value: item.Email},
												{type: 'Data', value: item.Role},
											]}
											pageName = 'adminUserPage'
											rowLink = {'admin/user/' + item.id}
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
											{type: 'Header', value: 'START DATE'},
											{type: 'Header', value: 'END DATE'},
										]}
										pageName = 'adminSectionPage'
									/>

									{this.state.sectionList.map((item, index) =>
										<TableRow
											columnCount ={[
												{type: 'Data', value: item.Title},
												{type: 'Data', value: item.Location},
												{type: 'Data', value: item.StartDate.split('T')[0]},
												{type: 'Data', value: item.EndDate.split('T')[0]}
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