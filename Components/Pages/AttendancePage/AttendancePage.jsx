import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import "./AttendancePage.css";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";

const { UserInfo, location, router, openModal, closeModal, showModal } = this.props;
const Role = UserInfo.UserInfo.Role;

class AttendancePage extends Component {

	constructor(...args){
		super(args);

		this.state = {
			view: "bySession",
			sections:[],
			sessions: []
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
		this.setState({view: false});

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
				{this.state.view ? 
					<div id="AttendancePage_menuDiv">
						<AttendanceMenu

						/>
					</div>
					:
					null
				}

				<div className='wholeTable'>
					<TableRow 
						columnCount ={[
							{type: 'Header', value: 'TIME'},
							{type: 'Header', value: 'DATE'},
							{type: 'Header', value: 'ATTENDANCE'},
							{type: 'Header', value: 'NOTES'}
						]}
						pageName = 'attendancePage'
					/>

					{dummyData.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.week},
								{type: 'Data', value: item.homework},
								{type: 'Data', value: item.dueDate},
								{type: 'Button', value: item.submission},
							]}
							pageName = 'attendancePage'
							key= {index}
						/>
					)}
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