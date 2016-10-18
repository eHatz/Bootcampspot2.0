import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import "./AttendancePage.css";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";
import AttendanceButton from "./AttendanceButton/AttendanceButton.jsx";
import AttendanceSessionsView from "./AttendanceSessionsView/AttendanceSessionsView.jsx";
import AttendanceStudentsView from "./AttendanceStudentsView/AttendanceStudentsView.jsx";
import AttendanceStudentView from "./AttendanceStudentView/AttendanceStudentView.jsx";


const { UserInfo, location, router, openModal, closeModal, showModal } = this.props;
const Role = UserInfo.UserInfo.Role;

class AttendancePage extends Component {

	constructor(...args){
		super(args);

		this.state = {
			view: "", //allSessions, or singleSession, or singleStudent
			isStudent: false
		}
	}

	componentWillMount() {
		if (Role === "Admin"){
			this.adminView();
		} else if (Role === "Teacher"){
			this.teacherView();
		} else(this.studentView())
	}

	adminView(){
		fetch("/admin/getSections", {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json())
		.then((json) =>  this.setState({sections: json});
		)
	}
		
	teacherView(){
		fetch("/attendance/teacher", {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json())
		.then((json) =>  this.setState({sections: json});
		)
	}

	studentView(){
		this.setState({
			isStudent: true,
			view: singleStudent
		});

		fetch("/attendance/student", {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json())
		.then((json) =>  this.setState({sessions: json});
		)
	}


	

	switchView(event){
		this.setState({view: event.target.value});
	}

	// sectionSort(event){
	// 	this.setState({displaySection: event.target.value});
	// }

	render() {

		return (

			<div className="attendanceBackground">

				{this.state.isStudent ? 
					<AttendanceButton handleClick={attendanceButtonOnClick} />
					:
					<div id="AttendancePage_menuDiv">
						<AttendanceMenu

						/>
					</div>
				}

				<div className='wholeTable'>

					{this.state.view = allSessions ? 
						<

					}
					
				</div>
			</div>

		);
	}
}
export default AttendancePage;

/*
sections={UserInfo.UserInfo.sections}		



		Role === "Admin" || Role === "Teacher" ?
			this.adminTeacherView()
			:
			this.studentView()	
*/