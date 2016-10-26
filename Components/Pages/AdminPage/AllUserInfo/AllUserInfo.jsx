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
			sectionTitle: "",
			sectionList: [],
			AttendanceTab: 'active',
			CareerTab: 'inactive',
			HomeworkTab: 'inactive',
		};
		this.getSections = this.getSections.bind(this);
		this.HomeworkTabClick = this.HomeworkTabClick.bind(this);
		this.CareerTabClick = this.CareerTabClick.bind(this);
		this.AttendanceTabClick = this.AttendanceTabClick.bind(this);
		this.getUser = this.getUser.bind(this);
		this.getAllStudentSubs = this.getAllStudentSubs.bind(this);

	}

	componentWillMount() {
		this.getSections();
		this.getUser();
	}

	getUser() {
		$.ajax({
			url: '/admin/getUser',
			type: "POST",
			data: {
				userId: this.props.params.id
			}
		}).then((response) =>{
			if (response.userInfo.Role !== 'Admin') {
				this.setState({
					email: response.userInfo.Email,
					firstName:response.userInfo.FirstName,
					lastName:response.userInfo.LastName,
					role:response.userInfo.Role,
					sectionTitle: response.section[0].Title
				});
			};
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
	AttendanceTabClick(event) {
		this.setState({ 
			AttendanceTab: 'active',
			CareerTab:'inactive',
			HomeworkTab: 'inactive'
		});
	}
	//activates/shows section tab
	CareerTabClick(event) {
		this.setState({ 
			AttendanceTab: 'inactive',
			CareerTab:'active',
			HomeworkTab: 'inactive'
		});
	}

	HomeworkTabClick(event) {
		this.setState({ 
			AttendanceTab: 'inactive',
			CareerTab:'inactive',
			HomeworkTab: 'active'
		});
	}

	getAllStudentSubs(assignmentId) {
		$.ajax({
			url: '/getAllStudentSubs',
			type: "POST",
			data: {
				studentId: this.props.params.id
			}
		}).then((response) => {
			this.setState({
				userSubmitted: response.usersSubmitted,
				userNoSubmitted: response.usersNoSubmitted,
			});
		});
	}

	render() {
		console.log('ROLEEEEEEEEEEE', this.state.role)
		return (
			
			<div>
				<CreateUserForm
					sectionList = {this.state.sectionList}
					UserFormType = 'update'
					userId= {this.props.params.id}
				/>
				{this.state.role === 'Student' ? (
					<div>
						<ul className="nav nav-pills">
							<li onClick={this.AttendanceTabClick} className={this.state.AttendanceTab}>
								<a data-toggle="pill" href={"#/admin/user/" + this.props.params.id}>Attendance</a>
							</li>
							<li onClick={this.CareerTabClick} className={this.state.CareerTab}>
								<a data-toggle="pill" href={"#/admin/user/" + this.props.params.id}>Career</a>
							</li>
							<li onClick={this.HomeworkTabClick} className={this.state.HomeworkTab}>
								<a data-toggle="pill" href={"#/admin/user/" + this.props.params.id}>Homework</a>
							</li>
						</ul>

						<div className="tab-content">
							<div id="adminAttendanceTab" className={"tab-pane fade in " + this.state.AttendanceTab}>
								<h1>attendance</h1>
							</div>
							<div id="adminCareerTab" className={"tab-pane fade in " + this.state.CareerTab}>
								<h1>career</h1>
							</div>
							<div id="adminHomeworkTab" className={"tab-pane fade in " + this.state.HomeworkTab}>
								<h1>Homework</h1>

							</div>
						</div>
					</div>
				):(
					null
				)}
			</div>
		);
	}
}
export default AllUserInfo;