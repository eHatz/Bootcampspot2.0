import React, { Component } from "react";
import "./AttendancePage.css";
import Table from "../../Table/Table.jsx";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";


class AttendancePage extends Component {

	componentWillMount() {
		const { UserInfo } = this.props;
		console.log('attendancePage page', UserInfo);
		console.log("role: ", UserInfo.UserInfo.Role);
	}

	render() {

		const { openModal, closeModal, showModal } = this.props;

		return (

			<div className="attendanceBackground">

				<div id="AttendancePage_menuDiv">
					{this.props.UserInfo.UserInfo.Role === "Teacher" || "Admin" ? 
						( <AttendanceMenu />  )
						:
						( null )
					}
				</div>

				<Table pageName='attendancePage'
					header1='NOTES' 
					header2 = 'TIME' 
					header3='DATE' 
					header4='ATTENDANCE'
					tableButtonRoute="/route"
				/>
			</div>

		);
	}
}
export default AttendancePage;

/*
sections={UserInfo.UserInfo.sections}			
*/