import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import AttendanceEditForm from "../AttendanceEditForm/AttendanceEditForm.jsx";
import "./AttendanceStudentView.css";



class AttendanceStudentView extends Component {

	chooseAttendanceDisplay(isStudent, item, markAttendance){

		if (isStudent) {
			//If the user is a student, they will simply see their attendance status for past classes as text - no editing!
			let tableObj = {
						type: "Data",
						value: item.Status
					}
			return tableObj;
		} else {
				
			//If the user is an admin or teacher, they will see a dropdown menu to edit a student's attendance status for each day.
			let tableObj = {
							type: 'Button', 
							value: item.Status, 
							button: (
								<AttendanceEditForm 
									text={item.Status}
									attendanceId={item.id}
									markAttendance={markAttendance}
								/>
							)
							}
			return tableObj;	
		}

	}

	render(){

		const { displayData, markAttendance, isStudent } = this.props;
		console.log("isStudent: ", isStudent);

		return (
			<div>

				<TableRow 
					columnCount ={[
						{type: 'Header', value: 'Class'},
						{type: 'Header', value: 'Date'},
						{type: 'Header', value: 'Time'},
						{type: 'Header', value: 'Status'},
					]}
					pageName = 'AttendancePage_AttendanceStudentView'
				/>

				{displayData.map((item, index) =>

					<TableRow
						columnCount ={[
							{type: 'Data', value: item.Class},
							{type: 'Data', value: item.Date},
							{type: 'Data', value: item.Time},
							this.chooseAttendanceDisplay(isStudent, item, markAttendance)
						]}

						pageName = 'Attendance_edit AttendancePage_AttendanceStudentView'
						key= {index}
					/>

				)}
			</div>
		)
	}

}

export default AttendanceStudentView;





