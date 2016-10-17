import React, { Component } from "react";
import "./AttendancePage.css";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";

var dummyData= [
	{
		week: 1,
		homework: 'Homework1',
		dueDate: '1/2/2016',
		submission: '1/1/2016'
	},
	{
		week: 2,
		homework: 'Homework2',
		dueDate: '1/2/2016',
		submission: '1/1/2016'
	},
	{
		week: 3,
		homework: 'Homework3',
		dueDate: '1/2/2016',
		submission: '1/1/2016'
	}
];

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
*/