import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import $ from "jquery";
import "./AttendancePage.css";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";
import AttendanceButton from "./AttendanceButton/AttendanceButton.jsx";
import AttendanceSessionsView from "./AttendanceSessionsView/AttendanceSessionsView.jsx";
import AttendanceStudentsView from "./AttendanceStudentsView/AttendanceStudentsView.jsx";
import AttendanceStudentView from "./AttendanceStudentView/AttendanceStudentView.jsx";


class AttendancePage extends Component {

	constructor(props){
		super(props);

		this.state = {
			sections: [], //Holds all the sections that the current user is authorized to see - should not change after component mounts
			// currentSectionIndex: 0,
			view: "", //Determines which view component gets redered.  Must be allSessions, singleSession, or singleStudent
			isStudent: false, //turns the Admin/Teacher control panel into an attendance button if true
			displayData: [] //Holds the actual data displayed by the current view component
		}

		this.goAjax = this.goAjax.bind(this);
		this.getSessions = this.getSessions.bind(this);
		this.userIsAdmin = this.userIsAdmin.bind(this);
		this.userIsTeacher = this.userIsTeacher.bind(this);
		this.userIsStudent = this.userIsStudent.bind(this);
		this.viewSingleSession = this.viewSingleSession.bind(this);
		this.selectStudentHandler = this.selectStudentHandler.bind(this);
		this.viewSingleStudent = this.viewSingleStudent.bind(this);
		this.attendanceMenuSectionHandler = this.attendanceMenuSectionHandler.bind(this);
		this.attendanceButtonOnClick = this.attendanceButtonOnClick.bind(this);
	}

	componentWillMount() {

		const { UserInfo } = this.props;
		const Role = UserInfo.UserInfo.Role;
		const userId = UserInfo.UserInfo.id

		if (Role === "Admin"){
			this.userIsAdmin();
		} else if (Role === "Teacher"){
			this.userIsTeacher(userId);
		} else (this.userIsStudent(userId))

	}

	//Mutli-use ajax post call
	goAjax(route, data, stateProperty){
		const that = this;
		return $.ajax({
				url: route,
				type: "POST",
				data: data
		}).then(
			function(response){
				if (stateProperty){
					that.setState({
						[stateProperty]: response
					});
				}
				return response;
			}
		)
	}

	//This method fires when an admin or teacher selects a section to view
	attendanceMenuSectionHandler(event){
		const index = event.target.value;
		const selectedSection = this.state.sections[index].id;
		
		this.getSessions(selectedSection)
	}

	//This retrieves all sessions for the current section and prints them to the screen.
	getSessions(sectionId){
		const dataObj = {section: sectionId}

		this.goAjax("attendance/getAllSessions", dataObj, "displayData")
			.then(function(){
				//Switch state to "allSessionsView", and pass displayData to AttendanceSessionsView	
				this.setState({
		    		view: "allSessions"
	    		});
			}.bind(this))
	}

	//Show attendance for every student in a selected class session
	viewSingleSession(event){
		const sessionId = event.currentTarget.getAttribute('id');
		const ajaxData = {sessionId: sessionId};
		console.log("sessionId: ", sessionId);
		// console.log("event: ", event.target);
		this.goAjax("/attendance/singleSession", ajaxData, "displayData")
			.then(function(response){
				this.setState({
					view: "singleSession"
				})
				console.log("viewSingleSession: ", response)
			}.bind(this))
		//goAjax(route, data, stateProperty){}
	}

	//Shows all attendance for one student
	viewSingleStudent(studentId){
		const ajaxData = {studentId: studentId}
		console.log("viewSingleStudent-- ", ajaxData);
		this.goAjax("/attendance/singleStudent", ajaxData, "displayData")
			.then(function(response){
				this.setState({
					view: "singleStudent"
				})
			}.bind(this))
	}

	//Click handler to select one student from the singleSession view
	selectStudentHandler(event){
		const studentId = event.currentTarget.getAttribute('value');
		this.viewSingleStudent(studentId);
	}

	userIsAdmin(){
		//Retrieve all sections
		this.goAjax("/admin/getSections", null, "sections")
			.then(function(response){
				//Retrieve the related sessions
				const firstSectionId = response[0].id
				this.getSessions(firstSectionId)
			}.bind(this))
	}
		
	userIsTeacher(userId){
		const ajaxData = {id: userId};
		this.goAjax("/attendance/getTeacherSections", ajaxData)
			.then(function(response){
				this.setState({
					sections: response.sections,
					displayData: response.sessions, 
					view: "allSessions"
				})
			}.bind(this))
	}

	userIsStudent(userId){
		this.setState({
			isStudent: true
		});
		viewSingleStudent(userId);
	}





	attendanceButtonOnClick(){

	}

	render() {

		return (

			<div className="attendanceBackground">

				<div id="AttendancePage_menuDiv">

					{this.state.isStudent ? (
						<AttendanceButton handleClick={this.attendanceButtonOnClick} />
						):(
						<AttendanceMenu
							attendanceMenuSectionHandler={this.attendanceMenuSectionHandler}
							sections={this.state.sections}
						/>)
					}

				</div>

				<div className='wholeTable'>

					{this.state.view === "allSessions" ? 
						<AttendanceSessionsView
							displayData={this.state.displayData}
							viewSingleSession={this.viewSingleSession}
						/>
						: 
						this.state.view === "singleSession" ?
							<AttendanceStudentsView
								displayData={this.state.displayData}
								selectStudentHandler={this.selectStudentHandler}
							/>
							:						
							<AttendanceStudentView
								displayData={this.state.displayData}
							/>
					}
					
				</div>
				
			</div>

		);
	}
}


export default AttendancePage;

/*

*/