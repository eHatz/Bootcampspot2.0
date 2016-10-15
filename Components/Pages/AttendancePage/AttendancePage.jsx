import React, { Component } from "react";
import "./AttendancePage.css";
import Table from "../../Table/Table.jsx";


class AttendancePage extends Component {
	componentWillMount() {
		const { UserInfo } = this.props;
		console.log('attendancePage', UserInfo);

	}
	render() {

		const { openModal, closeModal, showModal } = this.props;

		return (

			<div className="attendanceBackground">
				<Table pageName='attendancePage'
					header1='NOTES' 
					header2 = 'TIME' 
					header3='DATE' 
					header4='ATTENDANCE'
				/>
			</div>

		);
	}
}
export default AttendancePage;