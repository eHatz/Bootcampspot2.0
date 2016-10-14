import React, { Component } from "react";
import "./AttendancePage.css";
import Table from "../../Table/Table.jsx";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";


class AttendancePage extends Component {

	componentWillMount() {
		const { UserInfo } = this.props;
		console.log('attendancePage page', UserInfo);

	}
	render() {

		const { openModal, closeModal, showModal } = this.props;

		return (

			<div className="attendanceBackground">

				<div id="AttendancePage_menuDiv">
					{UserInfo.Role === "Teacher" || "Admin" ? 
						( <AttendanceMenu sections={UserInfo.sections}/>  )
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