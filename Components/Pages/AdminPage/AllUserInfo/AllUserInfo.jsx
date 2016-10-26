import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./AllUserInfo.css";
import $ from "jquery";
import CreateUserForm from '../createUserForm/createUserForm.jsx';
import Attendance from "../../AttendancePage/AttendanceStudentView/AttendanceStudentView.jsx";
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
			attendanceData: []
		};
		this.getSections = this.getSections.bind(this);
		this.HomeworkTabClick = this.HomeworkTabClick.bind(this);
		this.CareerTabClick = this.CareerTabClick.bind(this);
		this.AttendanceTabClick = this.AttendanceTabClick.bind(this);
	}

	componentWillMount() {
		this.getSections();
		this.getStudentAttendance();
	}

	getSections() {
		$.ajax({
			url: '/admin/getSections',
			type: "POST"
		}).then((response) => {
			this.setState({sectionList: response.section});
		});
	}

	getStudentAttendance(){
		const ajaxData = {studentId: this.props.params.id};
		$.ajax({
			url: "/attendance/singleStudent",
			type: "POST",
			data: ajaxData
		}).then(function(response){
			this.setState({
				attendanceData: response
			})
		}.bind(this))
	}

	// 	viewSingleStudent(studentId){
	// 	const ajaxData = {studentId: studentId}
	// 	console.log("viewSingleStudent-- ", ajaxData);
	// 	this.goAjax("/attendance/singleStudent", ajaxData, "displayData")
	// 		.then(function(response){
	// 			this.setState({
	// 				view: "singleStudent"
	// 			})
	// 		}.bind(this))
	// }

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

	render() {
		console.log('ROLEEEEEEEEEEE', this.state.role)
		return (
			
			<div>
				<CreateUserForm
					sectionList = {this.state.sectionList}
					UserFormType = 'update'
					userId= {this.props.params.id}
				/>
				{this.state.role === '' ? (
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
									<Attendance 
										displayData={this.state.attendanceData}
										markAttendance={"null"}
										isStudent={true}
									/>
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