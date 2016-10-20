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
			sections: [], //Holds all the sections that the current user is authorized to see
			currentSectionIndex: 0,
			sessions: [],
			view: "", //Determines which view component gets redered.  Must be allSessions, singleSession, or singleStudent
			isStudent: false, //turns the Admin/Teacher control panel into an attendance button if true
			displayData: [] //Holds the actual data displayed by the current view component
		}

		this.goAjax = this.goAjax.bind(this);
		this.getSessions = this.getSessions.bind(this);
		this.userIsAdmin = this.userIsAdmin.bind(this);
		this.userIsTeacher = this.userIsTeacher.bind(this);
		this.userIsStudent = this.userIsStudent.bind(this);
		this.switchDisplay = this.switchDisplay.bind(this);
		this.selectSection = this.selectSection.bind(this);
		this.attendanceButtonOnClick = this.attendanceButtonOnClick.bind(this);
	}

	componentWillMount() {

		const { UserInfo } = this.props;
		const Role = UserInfo.UserInfo.Role;

		if (Role === "Admin"){
			this.userIsAdmin();
		} else if (Role === "Teacher"){
			this.userIsTeacher();
		} else (this.userIsStudent())

	}

	goAjax(route, data, stateProperty){
		let p = new Promise(
			$.ajax({
				url: route,
				type: "POST",
				data: data
			}).done(function(response){
				this.setState({
					[stateProperty]: response
				});
				console.log("ajax response: ", response)
			}.bind(this))
		)

		return p;
	}

	getSessions(){
		//These four constants just load the id for the current section into our AJAX call
		const sections = this.state.sections;
		const index = this.state.currentSectionIndex;

		console.log(sections);

		// const sectionId = sections[index].id;
		// const dataObj = {section: sectionId}

		// goAjax("attendance/getAllSessions", dataObj, "sessions");

		// console.log("getSessions");

	}

	userIsAdmin(){
		//Retrieve all sections
		this.goAjax("/admin/getSections", null, "sections")
		.then(this.getSessions())
		
		// this.setState({
  //   		view: "allSessions",
  //   		displayData: this.state.sessions
  //   	});

	}
		
	userIsTeacher(){
		// fetch("/attendance/teacher", {
		// 	credentials: 'include',
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then((response) => response.json())
		// .then((json) =>  this.setState({sections: json});
		// )
	}

	userIsStudent(){
		// this.setState({
		// 	isStudent: true,
		// 	view: singleStudent
		// });

		// fetch("/attendance/student", {
		// 	credentials: 'include',
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then((response) => response.json())
		// .then((json) =>  this.setState({sessions: json});
		// )
	}

	switchDisplay(event){
		this.setState({view: event.target.value});
		// console.log("switchView: ", this.state.view);
	}

	//This method fires when an admin or teacher selects a section to view
	selectSection(event){

		//Switches table view to show all sessions for the selected section
		// console.log("selectSection event.target.value: ", event.target.value);

		//Grab the sessions from the DB
		$.ajax({
	        url: "attendance/getAllSessions",
	        type: "POST",
	        data:{
	        	section: event.target.value
	        }
	    }).done(function(response){
	    	//Save the sessions to state and render them to the page
	    	// console.log("displayData selectSection: ", response);
	    	this.setState({
	    		view: "allSessions",
	    		displayData: response
	    	});
	    }.bind(this));
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
							selectSection={this.selectSection}
							switchDisplay={this.switchDisplay}
							sections={this.state.sections}
						/>)
					}

				</div>

				<div className='wholeTable'>

					{this.state.view === "allSessions" ? 
						<AttendanceSessionsView
							displayData={this.state.displayData}
						/>
						: 
						this.state.view === "singleSession" ?
							<AttendanceStudentsView

							/>
							:						
							<AttendanceStudentView

							/>
					}
					
				</div>
				
			</div>

		);
	}
}


export default AttendancePage;

/*
========


				
=======


sections={UserInfo.UserInfo.sections}		



		Role === "Admin" || Role === "Teacher" ?
			this.adminTeacherView()
			:
			this.studentView()	
*/